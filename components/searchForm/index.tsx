import React, {ChangeEvent, Component} from 'react';

import {IHashtagData} from 'types';
import SelectedHashtagList from '../selectedHashtagList';
import SuggestionList from '../suggestionList';
import './index.css';

interface ISearchFormProps {
    onSubmit(searchInput: string, selectedHashtags: string[]): void;
}

interface ISearchFormState {
    allHashtags: IHashtagData[];
    hashtagInput: string;
    hashtagLoadingError: string;
    matchingHashtags: string[];
    searchInput: string;
    selectedHashtagIndex: number;
    selectedHashtags: string[];
}

export default class SearchForm extends Component<ISearchFormProps> {
    defaultState = {};

    state: ISearchFormState = {
        allHashtags: [],
        hashtagInput: '',
        hashtagLoadingError: '',
        matchingHashtags: [],
        searchInput: '',
        selectedHashtagIndex: -1,
        selectedHashtags: []
    };

    componentDidMount() {
        this.fetchHashtags();
    }

    fetchHashtags = () => {
        fetch('/api/hashtags')
            .then((response) => response.json())
            .then((allHashtags) => this.setState({allHashtags}))
            .catch((error) => {
                this.setState({
                    hashtagLoadingError: 'Не удалось загрузить хештеги'
                });
                console.error(error);
            })
            .finally(() => {
                Object.assign(this.defaultState, this.state);
            });
    }

    handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({searchInput: event.target.value});
    }

    handleHashtagInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {allHashtags, selectedHashtags} = this.state;

        const matchingHashtags = allHashtags
            .filter(
                (hashtag: {name: string}) =>
                    hashtag.name.includes(event.target.value) &&
                    !selectedHashtags.includes(hashtag.name)
            )
            .map((hashtag: {name: string}) => hashtag.name);

        this.setState({hashtagInput: event.target.value, matchingHashtags});
    }

    handleKeyDown = (event: any) => { // KeyboardEvent<HTMLInputElement>) => { // Возникает ошибка
        const {selectedHashtagIndex, matchingHashtags} = this.state;
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.setState({
                    selectedHashtagIndex: Math.min(
                        matchingHashtags.length - 1,
                        selectedHashtagIndex + 1
                    )
                });
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.setState({
                    selectedHashtagIndex: Math.max(0, selectedHashtagIndex - 1)
                });
                break;
            case 'Enter':
                event.preventDefault();
                this.selectHashtag(selectedHashtagIndex);
                break;
        }
    }

    handleSubmit = (event: any) => { // MouseEvent<HTMLButtonElement, MouseEvent>) => { // Возникает ошибка
        event.preventDefault();

        const {searchInput, selectedHashtags} = this.state;
        this.props.onSubmit(searchInput, selectedHashtags);

        this.setState(Object.assign(this.defaultState));
    }

    removeHashtag = (index: number) => {
        const {selectedHashtags} = this.state;
        selectedHashtags.splice(index, 1);
        this.setState({selectedHashtags});
    }

    selectHashtag = (index: number) => {
        const {matchingHashtags} = this.state;
        let {selectedHashtags, selectedHashtagIndex} = this.state;

        if (
            matchingHashtags.length > 0 &&
            index >= 0 &&
            index < matchingHashtags.length
        ) {
            selectedHashtags = [
                ...selectedHashtags,
                matchingHashtags.splice(index, 1)[0]
            ];
            selectedHashtagIndex = this.calcSelectedHashtagIndex(
                index,
                selectedHashtagIndex,
                matchingHashtags
            );

            this.setState({
                hashtagFilterInput: '',
                matchingHashtags,
                selectedHashtagIndex,
                selectedHashtags
            });
        }
    }

    calcSelectedHashtagIndex = (
        index: number,
        selectedHashtagIndex: number,
        matchingHashtags: string[]
    ) => {
        if (matchingHashtags.length === 0) {
            selectedHashtagIndex = -1;
        } else if (index === selectedHashtagIndex) {
            selectedHashtagIndex = Math.min(
                matchingHashtags.length - 1,
                selectedHashtagIndex
            );
        } else if (index < selectedHashtagIndex) {
            selectedHashtagIndex--;
        }

        return selectedHashtagIndex;
    }

    render() {
        const {
            searchInput,
            hashtagInput,
            hashtagLoadingError,
            matchingHashtags,
            selectedHashtagIndex,
            selectedHashtags
        } = this.state;

        return (
            <form className="search-form">
                <article>
                    <section className="search">
                        <input
                            className="search__input"
                            type="text"
                            name="searchInput"
                            value={searchInput}
                            placeholder="Текст запроса"
                            autoComplete="off"
                            onChange={this.handleSearchInputChange}
                        />
                        <button
                            className="search__button"
                            name="searchButton"
                            onClick={this.handleSubmit}
                        >
                            Найти
                        </button>
                    </section>
                    <section className="hashtag-filter">
                        <SelectedHashtagList
                            hashtags={selectedHashtags}
                            removeHashtag={this.removeHashtag}
                        />
                        <div className="hashtag-filter__input-container">
                            <input
                                className="hashtag-filter__input"
                                type="text"
                                name="hashtagFilterInput"
                                value={hashtagInput}
                                placeholder="Хештег"
                                autoComplete="off"
                                onChange={this.handleHashtagInputChange}
                                onKeyDown={this.handleKeyDown}
                            />
                            {matchingHashtags.length > 0 && (
                                <SuggestionList
                                    hashtags={matchingHashtags}
                                    indexOfSelected={selectedHashtagIndex}
                                    selectHashtag={this.selectHashtag}
                                />
                            )}
                        </div>
                    </section>
                </article>
                {hashtagLoadingError !== '' && <p>{hashtagLoadingError}</p>}
            </form>
        );
    }
}

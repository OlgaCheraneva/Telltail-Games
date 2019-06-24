import React, {Component, Fragment} from 'react';

import Adventures from '../components/adventures';
import SearchForm from '../components/searchForm';
import PathContext from '../server/pathContext';

import {IAdventureData} from 'types';

interface IAdventuresPageProps {
    adventures: IAdventureData[];
}

interface IAdventuresPageState {
    adventures: IAdventureData[];
    loading: boolean;
    page: number;
    previouslyScrolledByY: number;
    searchInput: string;
    selectedHashtags: string[];
    didAdventuresEnd: boolean;
}

export default class IndexPage extends Component<
    IAdventuresPageProps,
    IAdventuresPageState
> {
    state: IAdventuresPageState = {
        adventures: [],
        didAdventuresEnd: true,
        loading: true,
        page: 0,
        previouslyScrolledByY: 0,
        searchInput: '',
        selectedHashtags: []
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.fetchAdventures();
    }

    handleScroll = () => {
        if (this.isScrolledDown()) {
            this.fetchAdventures();
        }
    }

    isScrolledDown = () => {
        const {previouslyScrolledByY} = this.state;
        const availableForScrolling = this.getAvailableForScrolling();
        const scrolled = window.scrollY;
        const thresholdDifferenceInPx = 1;

        if (
            availableForScrolling - scrolled < thresholdDifferenceInPx &&
            previouslyScrolledByY < scrolled
        ) {
            this.setState({previouslyScrolledByY: scrolled});
            return true;
        }

        return false;
    }

    getAvailableForScrolling() {
        return document.documentElement.scrollHeight - window.innerHeight;
    }

    fetchAdventures = (substitute = false) => {
        const {adventures, page, searchInput, selectedHashtags} = this.state;

        const url = `/api/adventures?page=${page}${
            searchInput !== '' ? `&searchInput=${searchInput}` : ''
        }${
            selectedHashtags.length !== 0
                ? `&hashtags=${selectedHashtags.join(';')}`
                : ''
        }`;

        fetch(url)
            .then((response) => response.json())
            .then((newAdventures) => {
                this.setState({
                    adventures: substitute
                        ? newAdventures
                        : adventures.concat(newAdventures),
                    didAdventuresEnd: newAdventures.length === 0,
                    loading: false,
                    page: page + 1
                });
            })
            .then(() => {
                const {didAdventuresEnd} = this.state;
                if (
                    this.getAvailableForScrolling() === 0 &&
                    !didAdventuresEnd
                ) {
                    this.fetchAdventures();
                }
            });
    }

    handleSubmit = async (searchInput: string, selectedHashtags: string[]) => {
        await this.setState({
            page: 0,
            searchInput,
            selectedHashtags
        });
        this.fetchAdventures(true);
    }

    handlePopup = (event: any) => {
        const hashtagSuggestions = document.querySelector(
            '.hashtag-filter__suggestions'
        );
        if (
            !this.includesAnyOfClasses(Array.from(event.target.classList), [
                'hashtag-filter__suggestions',
                'hashtag-filter__suggestion',
                'hashtag-filter__input'
            ]) &&
            hashtagSuggestions !== null
        ) {
            hashtagSuggestions.classList.add('hidden');
        }
    }

    includesAnyOfClasses = (classList: string[], classes: string[]) => {
        let result = false;
        classes.forEach((className) => {
            if (classList.includes(className)) {
                result = true;
            }
        });

        return result;
    }

    render() {
        const {adventures, loading} = this.state;
        if (loading) {
            return <p>Загрузка...</p>;
        }
        return (
            <Fragment>
                <div onClick={this.handlePopup}>
                    <div className="layout">
                        <SearchForm onSubmit={this.handleSubmit} />
                        <PathContext.Consumer>
                            {(value) => (
                                <Adventures
                                    adventures={adventures}
                                    defaultPath={value.defaultPath}
                                    staticBasePath={value.staticBasePath}
                                />
                            )}
                        </PathContext.Consumer>
                    </div>
                </div>
            </Fragment>
        );
    }
}

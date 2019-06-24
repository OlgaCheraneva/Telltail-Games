import React, {Component} from 'react';

import {IHashtagData} from 'types';
import Adventures from '../components/adventures';
import PathContext from '../server/pathContext';

interface IHashtagPageProps {
    id: string;
}

interface IHashtagPageState {
    hashtag?: IHashtagData;
}

export default class HashtagPage extends Component<
    IHashtagPageProps,
    IHashtagPageState
> {
    static getInitialProps({req, query}: any) {
        const id = req ? req.params.id : query.id;

        return {id};
    }

    state: IHashtagPageState = {
        hashtag: undefined
    };

    componentDidMount() {
        fetch(`/api/hashtags/${this.props.id}`)
            .then((response) => response.json())
            .then((hashtag) => this.setState({hashtag}));
    }

    render() {
        const {hashtag} = this.state;

        if (!hashtag) {
            return <p>Страница загружается...</p>;
        }

        return (
            <div className="layout">
                <h1 className="hashtag__title">#{hashtag.name}</h1>

                <PathContext.Consumer>
                    {(value) => (
                        <Adventures
                            adventures={hashtag.adventures}
                            defaultPath={value.defaultPath}
                            staticBasePath={value.staticBasePath}
                        />
                    )}
                </PathContext.Consumer>
            </div>
        );
    }
}

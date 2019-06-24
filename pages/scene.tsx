import React, {Component} from 'react';

import {ISceneData} from 'types';
import Scene from '../components/scene';
import PathContext from '../server/pathContext';

interface IScenePageProps {
    id: string;
}

interface IScenePageState {
    scene?: ISceneData;
}

export default class ScenePage extends Component<
    IScenePageProps,
    IScenePageState
> {
    static getInitialProps({req, query}: any) {
        const id = req ? req.params.id : query.id;

        return {id};
    }

    state: IScenePageState = {
        scene: undefined
    };

    componentDidMount() {
        fetch(`/api/scenes/${this.props.id}`)
            .then((response) => response.json())
            .then((scene) => this.setState({scene}));
    }

    render() {
        const {scene} = this.state;

        if (!scene) {
            return <p>Сцена загружается...</p>;
        }

        return (
            <PathContext.Consumer>
                {(value) => (
                    <Scene
                        scene={scene}
                        staticBasePath={value.staticBasePath}
                    />
                )}
            </PathContext.Consumer>
        );
    }
}

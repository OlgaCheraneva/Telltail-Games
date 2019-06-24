import React, { Fragment } from 'react';

import {ISceneData} from 'types';
import Achievements from '../achievements';
import Actions from '../actions';
import './index.css';

interface ISceneProps {
    scene: ISceneData;
    staticBasePath: any;
}

export default function Scene({scene, staticBasePath}: ISceneProps) {
    const {hasImage, id, imageDescription, description, descriptionLocation} = scene;

    return(
        <Fragment>
            <article className="scene">
                <section className="scene__description">
                    {hasImage ?
                        <Fragment>
                            <img className="scene__image" src={`${staticBasePath}images/scene_${id}.jpg`}
                            alt={imageDescription} title={imageDescription}></img>
                            <p className={`scene_text_${descriptionLocation} scene__text`}>
                                {description}
                            </p>
                        </Fragment>
                    :
                    <p className="scene_text_black scene__text">{scene.description}</p>
                    }
                </section>
                <Achievements achievements={scene.achievements}/>
                <Actions actions={scene.actions} adventure={scene.adventure}/>
            </article>
        </Fragment>
    );
}

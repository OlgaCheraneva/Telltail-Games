import React, {Component} from 'react';

import {IAchievementData} from 'types';
import PathContext from '../../server/pathContext';
import './index.css';

interface IAchievementsProps {
    achievements: IAchievementData[];
}

export default class Achievements extends Component<IAchievementsProps> {
    render() {
        const {staticBasePath} = this.context;
        const {achievements} = this.props;

        return (
            <ul className="list scene__achievements">
                {achievements.map((achievement: IAchievementData) => {
                    return (
                        <li
                            className="list__item scene__achievement"
                            key={achievement.id}
                        >
                            <div className="achievement__image-container">
                                <img
                                    className="achievement__image"
                                    src={`${staticBasePath}images/achievement_${
                                        achievement.id
                                    }.jpg`}
                                    alt={achievement.imageDescription}
                                    title={achievement.imageDescription}
                                />
                            </div>
                            <div className="achievement__info">
                                <div className="achievement__title">
                                    Достижение получено
                                </div>
                                {achievement.name && (
                                    <div className="achievement__name">
                                        {achievement.name}
                                    </div>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}
Achievements.contextType = PathContext;

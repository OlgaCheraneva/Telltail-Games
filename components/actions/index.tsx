// import Link from 'next/link';
import React, { Component } from 'react';

import {IActionData, IAdventureData} from 'types';
import './index.css';

interface IActionsProps {
    actions: IActionData[];
    adventure: IAdventureData;
}

export default class Actions extends Component<IActionsProps> {
    registerCompletion = () => {
        const adventureId = this.props.adventure.id;
        const userLogin = this.getCookie('userLogin');
        const userPassword = this.getCookie('userPassword');

        if (userLogin === undefined) {
            return;
        }

        fetch('/api/registerCompletion', {
            body: JSON.stringify({adventureId, userLogin, userPassword}),
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        });
    }

    getCookie = (name: string) => {
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    render() {
        const {adventure, actions} = this.props;

        if (actions.length === 0) {
            this.registerCompletion();

            return (
                <section className="scene__action">
                    <a className="link" href={`/scenes/${adventure.openingSceneId}`}>Начать заново</a>
                </section>
            );
        }

        return (
            <ul className="list scene__actions">
                {actions.map((action: IActionData) => {
                    // const linkAs = `/scenes/${action.nextSceneId}`;
                    // const linkHref = {
                    //     pathname: '/scene',
                    //     query: {id: action.nextSceneId}
                    // };
                    return (
                        <li className="list__item scene__action" key={action.id}>
                            {/* // Render срабатывает только после перезагрузки. Не разобралась, как это исправить
                            <Link as={linkAs} href={linkHref}>
                                <a className="link">{action.name}</a>
                            </Link> */}
                            <a className="link" href={`/scenes/${action.nextSceneId}`}>{action.name}</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

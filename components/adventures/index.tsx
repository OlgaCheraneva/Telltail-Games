import Link from 'next/link';
import React from 'react';

import {IAdventureData} from 'types';
import CompletionByUsers from '../completionByUsers';
import './index.css';

interface IAdventuresProps {
    adventures: IAdventureData[];
    defaultPath: string;
    staticBasePath: string;
}

export default function Adventures({adventures, defaultPath, staticBasePath}: IAdventuresProps) {
    if (!adventures.length) {
        return <p>Приключения не найдены!</p>;
    }

    return (
        <ul className="adventures list">
            {adventures.map((adventure) => {
                const linkAs = `/scenes/${adventure.openingSceneId}`;
                const linkHref = {
                    pathname: '/scene',
                    query: {id: adventure.openingSceneId}
                };

                return (
                    <li key={adventure.id}>
                        <article className="adventure">
                            <section className="adventure__image">
                                <Link as={linkAs} href={linkHref}>
                                    <a className="link">
                                        {adventure.hasImage ? (
                                            <img
                                                src={`${staticBasePath}images/adventure_${
                                                    adventure.id
                                                }.jpg`}
                                            />
                                        ) : (
                                            <img
                                                src={`${defaultPath}default/default_adventure_image.jpg`}
                                            />
                                        )}
                                    </a>
                                </Link>
                            </section>
                            <section className="adventure__info">
                                <section className="adventure__title">
                                    <Link as={linkAs} href={linkHref}>
                                        <a className="link title__text">
                                            {adventure.title}
                                        </a>
                                    </Link>
                                </section>
                                {adventure.description && (
                                    <section className="adventure__description">
                                        {adventure.description}
                                    </section>
                                )}
                                <CompletionByUsers adventure={adventure} />
                                {adventure.hashtags.length && (
                                    <ul className="list adventure__hashtags">
                                        {adventure.hashtags.map((hashtag) => {
                                            // Меняется адрес, но запрос не отправляется. Страница не меняется
                                            // const linkAsHashtag = `/hashtags/${hashtag.id}`;
                                            // const linkHrefHashtag = {
                                            //     pathname: '/hashtag',
                                            //     query: {id: hashtag.id}
                                            // };
                                            return (
                                                <li
                                                    className="list__item adventure__hashtag"
                                                    key={hashtag.id}
                                                >
                                                    {/* <Link as={linkAsHashtag} href={linkHrefHashtag}> */}
                                                    <a
                                                        className="link hashtag__name"
                                                        href={`/hashtags/${
                                                            hashtag.id
                                                        }`}
                                                    >
                                                        #{hashtag.name}
                                                    </a>
                                                    {/* </Link> */}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </section>
                        </article>
                    </li>
                );
            })}
        </ul>
    );
}

import React from 'react';

import SelectedHashtagItem from '../selectedHashtagItem';

interface ISelectedHashtagListProps {
    hashtags: string[];
    removeHashtag(index: number): void;
}

export default function SelectedHashtagList({hashtags, removeHashtag}: ISelectedHashtagListProps) {
    let index = 0;

    return (
        <ul className="selected-hashtag-list list">
            {hashtags.map((hashtag: string) => {
                return (
                    <SelectedHashtagItem
                        hashtag={hashtag}
                        removeHashtag={removeHashtag}
                        index={index++}
                        key={index}
                    />
                );
            })}
        </ul>
    );
}

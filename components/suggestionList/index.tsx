import React from 'react';

import SuggestionItem from '../suggestionItem';

interface ISuggestionListProps {
    hashtags: string[];
    indexOfSelected: number;
    selectHashtag(selectedHashtagIndex: number): void;
}

export default function SuggestionList({
    hashtags,
    indexOfSelected,
    selectHashtag
}: ISuggestionListProps) {
    let index = 0;

    return (
        <ul className="hashtag-filter__suggestions list">
            {hashtags.map((hashtag: string) => {
                return (
                    <SuggestionItem
                        hashtag={hashtag}
                        index={index++}
                        indexOfSelected={indexOfSelected}
                        selectHashtag={selectHashtag}
                    />
                );
            })}
        </ul>
    );
}

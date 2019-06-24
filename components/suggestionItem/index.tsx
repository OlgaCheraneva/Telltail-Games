import React from 'react';

interface ISuggestionListProps {
    hashtag: string;
    index: number;
    indexOfSelected: number;
    selectHashtag(selectedHashtagIndex: number): void;
}

export default function SuggestionList({
    hashtag,
    index,
    indexOfSelected,
    selectHashtag
}: ISuggestionListProps) {
    return (
        <li
            className={`hashtag-filter__suggestion${
                indexOfSelected === index
                    ? ' hashtag-filter__suggestion_focused'
                    : ''
            }`}
            onClick={() => selectHashtag(index)}
        >
            {hashtag}
        </li>
    );
}

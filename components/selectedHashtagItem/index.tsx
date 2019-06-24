import React, {Component} from 'react';

import PathContext from '../../server/pathContext';

interface ISelectedHashtagItemProps {
    hashtag: string;
    index: number;
    removeHashtag(index: number): void;
}

export default class SelectedHashtagItem extends Component<
    ISelectedHashtagItemProps
> {
    render() {
        const {defaultPath} = this.context;
        const {hashtag, index, removeHashtag} = this.props;
        return (
            <li className="selected-hashtag" data-name={hashtag} key={index}>
                #{hashtag}
                <button className="selected-hashtag__remove-button" />
                <img
                    className="remove-button"
                    src={`${defaultPath}default/remove_button_image.svg`}
                    alt="Кнопка удаления хештега"
                    onClick={() => removeHashtag(index)}
                />
            </li>
        );
    }
}
SelectedHashtagItem.contextType = PathContext;

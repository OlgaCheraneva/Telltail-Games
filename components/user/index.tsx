import React, { Component, Fragment } from 'react';

import PathContext from '../../server/pathContext';
import './index.css';

interface IUserProps {
    avatar: string | undefined;
    login: string;
}

export default class User extends Component<IUserProps> {
    render() {
        const {avatar, login} = this.props;

        return (
            <Fragment>
                <img className="user-info__avatar" src={avatar || `${this.context.defaultPath}default/avatar.jpg`} />
                <span className="user-info__login">{login}</span>
            </Fragment>
        );
    }
}
User.contextType = PathContext;

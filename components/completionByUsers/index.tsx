import React, {Component} from 'react';

import {IAdventureData, ICompletionData, IUserData, IUserDataWithCompletionCount} from 'types';
import PathContext from '../../server/pathContext';
import './index.css';

interface ICompletionByUsersProps {
    adventure: IAdventureData;
}

interface ICompletionByUsersState {
    users: IUserDataWithCompletionCount[];
}

export default class CompletionByUsers extends Component<
    ICompletionByUsersProps,
    ICompletionByUsersState
> {
    state: ICompletionByUsersState = {
        users: []
    };

    componentDidMount() {
        const {adventure} = this.props;
        const {users} = this.props.adventure;
        users.forEach((user: IUserData) => {
            const {avatar, id, login} = user;
            fetch('/api/completionRegisteredCount', {
                body: JSON.stringify({adventureId: adventure.id, userId: id}),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            })
                .then((res: Response) => res.json())
                .then((result: ICompletionData) => {
                    if (result !== null) {
                        const usersFromState = this.state.users;
                        this.setState({
                            users: [
                                ...usersFromState,
                                {avatar, id, login, count: result.count}
                            ]
                        });
                    }
                });
        });
    }

    render() {
        const {users} = this.state;

        return (
            <ul className="user-completion-list list">
                {users.map((user) => {
                    const {avatar, count, login} = user;
                    return (
                        <li className="user-completion-item" key={login}>
                            <img className="user-info__avatar"
                                src={avatar || `${this.context.defaultPath}default/avatar.jpg`}
                                alt={login}
                                title={login}
                            />
                            {count > 1 && <span className="user-info__count">{count}</span>}
                        </li>
                    );
                })}
            </ul>
        );
    }
}
CompletionByUsers.contextType = PathContext;

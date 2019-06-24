import Link from 'next/link';
import React, {Component} from 'react';

import User from '../user';
import './index.css';

interface IHeaderProps {
    defaultPath: string;
}

interface IHeaderState {
    userAvatar: string;
    userLogin: string;
}

export default class Header extends Component<IHeaderProps, IHeaderState> {
    state: IHeaderState = {
        userAvatar: '',
        userLogin: ''
    };

    componentDidMount() {
        const userLogin = this.getCookie('userLogin');
        const userPassword = this.getCookie('userPassword');
        if (userLogin !== undefined) {
            fetch(`/api/users/${userLogin}`)
                .then((res) => res.json())
                .then((user) => {
                    if (user !== null && user.password === userPassword) {
                        this.setState({userAvatar: user.avatar, userLogin});
                    }
                });
        } else {
            this.setState({userAvatar: '', userLogin: ''});
        }
    }

    getCookie = (name: string) => {
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    handleClick = () => {
        this.setState({userAvatar: '', userLogin: ''});
    }

    render() {
        const {userAvatar, userLogin} = this.state;
        return (
            <header>
                <Link as="/adventures" href="/adventures">
                    <a className="logo link">
                        <img
                            className="logo__image"
                            src={`${this.props.defaultPath}default/logo.jpg`}
                            title="logo"
                            alt="logo"
                        />
                        <span className="logo__text">
                            <span className="logo__text_color_pink">
                                Telltail
                            </span>
                            Games
                        </span>
                    </a>
                </Link>
                {userLogin === '' ?
                <div className="auth">
                    <Link as="/registration" href="/registration">
                        <a className="link user-link link_background-gray">
                            Зарегистрироваться
                        </a>
                    </Link>
                    <Link as="/login" href="/login">
                        <a className="link user-link link_background-pink">
                            Войти
                        </a>
                    </Link>
                </div>
                :
                <div className="auth">
                    <User avatar={userAvatar} login={userLogin} />
                    <Link as="/login" href="/login">
                        <a className="link user-link link_background-gray" onClick={this.handleClick}>
                            Выйти
                        </a>
                    </Link>
                </div>
                }
            </header>
        );
    }
}

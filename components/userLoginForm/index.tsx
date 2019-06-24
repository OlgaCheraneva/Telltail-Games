import React, {ChangeEvent, Component} from 'react';

import {IUserLoginData} from 'types';
import './index.css';

interface IUserLoginFormProps {
    onSubmit(user: IUserLoginData): void;
}

interface IUserLoginFormState {
    error: string;
    login: string;
    password: string;
}

export class UserLoginForm extends Component<IUserLoginFormProps> {
    state: IUserLoginFormState = {
        error: '',
        login: '',
        password: ''
    };

    handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
        const login = event.target.value;
        this.setState({login});
    }

    handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({password: event.target.value});
    }

    hashCode = (pass: string): number => {
        let h = 0;
        const l = pass.length;
        let i = 0;
        if ( l > 0 ) {
            while (i < l) {
                // tslint:disable-next-line:no-bitwise
                h = (h << 5) - h + pass.charCodeAt(i++) | 0;
            }
        }
        return h;
    }

    handleSubmit = () => {
        const {login, password} = this.state;
        const hashPassword = this.hashCode(password);
        this.props.onSubmit({login, password: hashPassword.toString()});

        this.setState({login: '', password: ''});
    }

    render() {
        const {login, password, error} = this.state;
        const isButtonDisabled = !login || !password || !!error;

        return (
            <form className="user-form">
                <h1 className="user-form__header">Вход</h1>
                <input
                    className="user-form__input"
                    placeholder="Логин"
                    value={login}
                    onChange={this.handleLoginChange}
                />
                <input
                    className="user-form__input"
                    placeholder="Пароль"
                    type="password"
                    value={password}
                    onChange={this.handlePasswordChange}
                />
                <button
                    className={`user-form__button ${isButtonDisabled ? 'button_disabled' : ''}`}
                    disabled={isButtonDisabled}
                    type="submit"
                    onClick={this.handleSubmit}
                >
                    Войти
                </button>
            </form>
        );
    }
}

export default UserLoginForm;

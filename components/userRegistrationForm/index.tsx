import React, {ChangeEvent, Component} from 'react';

import {IUserRegistrationData} from 'types';
import './index.css';

interface IUserRegistrationFormProps {
    onSubmit(user: IUserRegistrationData): void;
}

interface IUserRegistrationFormState {
    avatar: string;
    login: string;
    loginError: string;
    password: string;
    passwordError: string;
}

export class UserRegistrationForm extends Component<IUserRegistrationFormProps> {
    state: IUserRegistrationFormState = {
        avatar: '',
        login: '',
        loginError: '',
        password: '',
        passwordError: ''
    };

    handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
        const login = event.target.value;
        const loginError = /^[A-Za-z0-9-]+$/.test(login)
            ? ''
            : `Логин может содержать только символы «a-Z», «0-9» и «-»`;
        this.setState({loginError, login});
    }

    handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value;
        const passwordError = password.length > 0 ? '' : 'Введите пароль';
        this.setState({password, passwordError});
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
        const {avatar, login, password} = this.state;
        const hashPassword = this.hashCode(password);
        this.props.onSubmit({avatar, login, password: hashPassword.toString()});

        this.setState({avatar: '', login: '', password: ''});
    }

    handleFileInput = (event: any) => {
        if (event.target.files.length === 0) {
            this.setState({avatar: ''});

            return;
        }

        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = ((_f: File) => {
            return (e: any) => {
                this.setState({avatar: e.target.result});
            };
        })(file);

        reader.readAsDataURL(file);
    }

    render() {
        const {login, loginError, password, passwordError} = this.state;
        const isButtonDisabled = !login || !password || !!loginError || !!passwordError;

        return (
            <form className="user-form">
                <h1 className="user-form__header">Регистрация</h1>
                <input
                    className="user-form__input"
                    placeholder="Логин"
                    value={login}
                    onChange={this.handleLoginChange}
                />
                {loginError && <p className="error-message">{loginError}</p>}
                <input
                    className="user-form__input"
                    placeholder="Пароль"
                    type="password"
                    value={password}
                    onChange={this.handlePasswordChange}
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
                <input className="user-form__file-selection" type="file" onInput={this.handleFileInput} />
                <button
                    className={`user-form__button ${isButtonDisabled ? 'button_disabled' : ''}`}
                    disabled={isButtonDisabled}
                    type="submit"
                    onClick={this.handleSubmit}
                >
                    Зарегистрироваться и войти
                </button>
            </form>
        );
    }
}

export default UserRegistrationForm;

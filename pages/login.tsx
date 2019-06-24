import React, {Component} from 'react';

import {IUserLoginData} from 'types';
import UserLoginForm from '../components/userLoginForm';

interface ILoginPageProps {
    login(userLogin: string, userPassword: string): void;
    logout(): void;
}

export class LoginPage extends Component<ILoginPageProps> {
    handleSubmit = (user: IUserLoginData) => {
        fetch('/api/login', {
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        }).then((response: Response) => {
            if (response.status === 403) {
                alert('Неверный логин или пароль.');
            } else {
                this.props.login(user.login, user.password);
                this.redirect();
            }
        });
    }

    redirect = () => {
        const a = document.createElement('a');
        a.setAttribute('href', '/');
        a.click();
    }

    componentDidMount() {
        this.props.logout();
    }

    render() {
        return (
            <div>
                <UserLoginForm onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default LoginPage;

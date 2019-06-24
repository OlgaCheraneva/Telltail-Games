import React, {Component} from 'react';

import {IUserRegistrationData} from 'types';
import UserRegistrationForm from '../components/userRegistrationForm';

interface IRegistrationPageProps {
    login(userLogin: string, userPassword: string): void;
}

export class RegistrationPage extends Component<IRegistrationPageProps> {
    handleSubmit = (user: IUserRegistrationData) => {
        fetch('/api/users', {
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        }).then((response: Response) => {
            if (response.status === 201) {
                this.props.login(user.login, user.password);
                this.redirect();
            } else if (response.status === 403) {
                alert('Пользователь с указанным логином уже существует.');
            }
        });
    }

    redirect = () => {
        const a = document.createElement('a');
        a.setAttribute('href', '/');
        a.click();
    }

    render() {
        return <UserRegistrationForm onSubmit={this.handleSubmit} />;
    }
}

export default RegistrationPage;

import App, {Container, NextAppContext} from 'next/app';
import React from 'react';

import Header from '../components/header';
import PathContext from '../server/pathContext';
import './app.css';

export default class MyApp extends App {
    static async getInitialProps({Component, ctx}: NextAppContext) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {pageProps};
    }

    login = (userLogin: string, userPassword: string) => {
        document.cookie = `userLogin=${userLogin}`;
        document.cookie = `userPassword=${userPassword}`;
    }

    logout = () => {
        const date = (new Date(0)).toUTCString();
        document.cookie = `userLogin=; expires=${date}`;
        document.cookie = `userPassword=; expires=${date}`;
    }

    render() {
        const {Component, pageProps} = this.props;

        return (
            <Container>
                <PathContext.Consumer>
                    {(value) => (
                        <Header
                            defaultPath={value.defaultPath}
                        />
                    )}
                </PathContext.Consumer>
                <Component {...pageProps} login={this.login} logout={this.logout} />
            </Container>
        );
    }
}
MyApp.contextType = PathContext;

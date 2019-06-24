import {parse} from 'url';

import {Application} from 'express';

import {chunk} from 'controllers/adventures';
import {hashtag, hashtagList} from 'controllers/hashtags';
import {scene} from 'controllers/scenes';
import {check, completionRegisteredCount, create, registerCompletion, user} from 'controllers/users';

export = (app: Application) => {
    app.get('/', (_req, res) => res.renderPage('/adventures'));
    app.get('/adventures', (_req, res) => res.renderPage('/adventures'));
    // Передаем параметры, чтобы обработать в компоненте страницы
    app.get('/scenes/:id', (req, res) => res.renderPage('/scene', {id: req.query.id}));
    app.get('/hashtags/:id', (req, res) => res.renderPage('/hashtag', {id: req.query.id}));
    app.get('/registration', (_req, res) => res.renderPage('/registration'));
    app.get('/login', (_req, res) => res.renderPage('/login'));

    app.get('/api/adventures*', chunk);
    app.get('/api/hashtags', hashtagList);
    app.get('/api/scenes/:id', scene);
    app.get('/api/hashtags/:id', hashtag);
    app.get('/api/users/:login', user);

    app.post('/api/users', create);
    app.post('/api/login', check);
    app.post('/api/registerCompletion', registerCompletion);
    app.post('/api/completionRegisteredCount', completionRegisteredCount);

    app.all('*', (req, res) => {
        const handleRequest = req.nextApp.getRequestHandler();
        const parsedUrl = parse(req.url, true);

        return handleRequest(req, res, parsedUrl);
    });
};

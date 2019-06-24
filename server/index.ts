// Удобно разделять зависимости на три группы
// В первой – встроенные модули Node.js в алфавитном порядке
import path from 'path';

// Во второй – сторонние модули
import bodyParser from 'body-parser';
import config from 'config';
import express, {NextFunction as Next, Request, Response} from 'express';
import 'isomorphic-fetch';
import morgan from 'morgan';
import nextjs from 'next';
import {Sequelize} from 'sequelize-typescript';

// В третьей – собственные модули
import render from 'middlewares/render';
import {Achievement} from 'models/Achievement';
import {AchievementScene} from 'models/AchievementScene';
import {Action} from 'models/Action';
import {Adventure} from 'models/Adventure';
import {AdventureUser} from 'models/AdventureUser';
import {Hashtag} from 'models/Hashtag';
import {HashtagAdventure} from 'models/HashtagAdventure';
import {Scene} from 'models/Scene';
import {User} from 'models/User';
import routes from 'routes';

const {DB_LOGIN, DB_PASS} = process.env;
const sequelize = new Sequelize(
    `postgres://${DB_LOGIN}:${DB_PASS}@isilo.db.elephantsql.com:5432/${DB_LOGIN}`
);
sequelize.addModels([
    Adventure,
    Hashtag,
    HashtagAdventure,
    Scene,
    Action,
    Achievement,
    AchievementScene,
    User,
    AdventureUser
]);

// Создаём экземпляр приложения
const app = express();

// Создаём экземпляр Next.js приложения
const nextApp = nextjs({dev: process.env.NODE_ENV !== 'production'});

// Определяем директорию для статичных файлов (изображений, стилей и скриптов)
const publicDir = path.join(__dirname, '../../public');

// Логируем запросы к приложению в debug-режиме
if (config.get('debug')) {
    app.use(morgan('dev'));
}

// Отдаём статичные файлы из соответствующей директории
app.use(express.static(publicDir));

// Разбираем тело POST запроса, чтобы сохранить заметку
// Запрос приходит в json формате (обычный для AJAX-запросов)
app.use(bodyParser.json());

// Выводим ошибку, если не смогли разобрать POST запрос, и продолжаем работу
app.use((err: Error, _req: Request, _res: Response, next: Next) => {
    console.error(err.stack);

    next();
});

// Добавляем хелперы для отрисовки страниц
app.use(render(nextApp));

// Подключаем маршруты
routes(app);

// Фиксируем фатальную ошибку и отправляем ответ с кодом 500
app.use((err: Error, _req: Request, res: Response, _next: Next) => {
    console.error(err.stack);

    res.sendStatus(500);
});

// Дожидаемся старта Next.js приложения, и только после этого запускаем Express.js сервер
nextApp.prepare().then(() => {
    const port = config.get('port');

    app.listen(port, () => {
        console.info(`Server started on ${port}`);
        console.info(`Open http://localhost:${port}/`);
    });
});

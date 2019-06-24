import {Request, Response} from 'express';

import {AdventureUser} from 'models/AdventureUser';
import {User} from 'models/User';

export function check(req: Request, res: Response) {
    const {login, password} = req.body;

    User.findOne({where: {login, password}}).then((result) => {
        if (result === null) {
            res.sendStatus(403);
        } else {
            res.json(result);
        }
    }).catch((err: Error) => {
        console.error(err);
        res.sendStatus(500);
    });
}

export function completionRegisteredCount(req: Request, res: Response) {
    const {adventureId, userId} = req.body;

    AdventureUser.findOne({where: {adventureId, userId}})
        .then((result) => res.json(result))
        .catch((err: Error) => {
            console.error(err);
            res.sendStatus(500);
        });
}

export function create(req: Request, res: Response) {
    const {avatar, login, password} = req.body;

    User.findOne({where: {login}}).then((result) => {
        if (result === null) {
            User.create({
                avatar,
                login,
                password
            }).then(() => res.sendStatus(201));
        } else {
            res.sendStatus(403);
        }
    }).catch((err: Error) => {
        console.error(err);
        res.sendStatus(500);
    });
}

export function registerCompletion(req: Request, res: Response) {
    const {adventureId, userLogin, userPassword} = req.body;

    User.findOne({where: {login: userLogin, password: userPassword}}).then((foundUser) => {
        if (foundUser !== null) {
            const userId = foundUser.id;
            AdventureUser.findOne({where: {adventureId, userId}})
                .then((result) => {
                    if (result !== null) {
                        AdventureUser.update({count: result.count + 1}, {where: {adventureId, userId}});
                    } else {
                        AdventureUser.create({adventureId, userId, count: 1});
                    }
                });
        }
    }).catch((err: Error) => {
        console.error(err);
        res.sendStatus(500);
    });
}

export function user(req: Request, res: Response) {
    const {login} = req.params;

    User.findOne({where: {login}})
        .then((foundUser: User | null) => {
            res.json(foundUser);
        })
        .catch((err: Error) => {
            console.error(err);
            res.sendStatus(500);
        });
}

import {Request, Response} from 'express';

import {Adventure} from 'models/Adventure';
import {Hashtag} from 'models/Hashtag';
import {User} from 'models/User';
import {Op} from 'sequelize';

export function hashtag(req: Request, res: Response) {
    const {id} = req.params;
    Hashtag.findByPk(id, {
        include: [
            {
                include: [
                    {
                        attributes: ['id', 'name', 'addressName'],
                        model: Hashtag
                    },
                    {
                        model: User
                    }
                ],
                model: Adventure,
                where: {openingSceneId: {[Op.ne]: null}}
            }
        ]
    })
        .then((foundHashtag: Hashtag | null) => {
            res.json(foundHashtag);
        })
        .catch((err: Error) => {
            console.error(err);
            res.sendStatus(500);
        });
}

export function hashtagList(_req: Request, res: Response) {
    Hashtag.findAll()
        .then((hashtags: Hashtag[]) => {
            res.json(hashtags);
        })
        .catch((err: Error) => {
            console.error(err);
            res.sendStatus(500);
        });
}

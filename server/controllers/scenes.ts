import {Request, Response} from 'express';

import {Achievement} from 'models/Achievement';
import {Action} from 'models/Action';
import {Adventure} from 'models/Adventure';
import {Scene} from 'models/Scene';

export function scene(req: Request, res: Response) {
    const {id} = req.params;
    Scene.findByPk(id, {
        attributes: [
            'id',
            'description',
            'descriptionLocation',
            'hasImage',
            'imageDescription'
        ],
        include: [
            {
                attributes: ['id', 'name', 'nextSceneId'],
                model: Action
            },
            {
                attributes: ['id', 'name', 'imageDescription'],
                model: Achievement
            },
            {
                attributes: ['id', 'openingSceneId'],
                model: Adventure
            }
        ]
    })
        .then((foundScene: Scene | null) => {
            res.json(foundScene);
        })
        .catch((err: Error) => {
            console.error(err);
            res.sendStatus(500);
        });
}

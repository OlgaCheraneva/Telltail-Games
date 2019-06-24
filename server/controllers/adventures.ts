import config from 'config';
import {Request, Response} from 'express';

import {Adventure} from 'models/Adventure';
import {Hashtag} from 'models/Hashtag';
import {User} from 'models/User';
import {Op} from 'sequelize';

const limit = Number(config.get('limit'));

export function chunk(req: Request, res: Response) {
    const params = getParameters(req);
    Adventure.scope('full')
        .findAll(params)
        .then((adventures: Adventure[]) => {
            res.json(adventures);
        })
        .catch((err: Error) => {
            console.error(err);
            res.sendStatus(500);
        });
}

function getParameters(req: Request) {
    const page = Number(req.query.page) || 0;
    const hashtagNames = (req.query.hashtags || '')
        .split(';')
        .map((hashtagName: string) => decodeURIComponent(hashtagName))
        .filter((hashtagName: string) => hashtagName !== '');
    const searchInput = decodeURIComponent(req.query.searchInput || '');

    const params = {
        include:
            hashtagNames.length === 0
                ? [{model: User}]
                : [{model: User},
                      {
                          model: Hashtag,
                          where: {
                              name: {[Op.in]: hashtagNames}
                          }
                      }
                  ],
        limit,
        offset: page * limit,
        where: {
            [Op.or]: [
                {title: {[Op.iLike]: `%${searchInput}%`}},
                {description: {[Op.iLike]: `%${searchInput}%`}}
            ]
        }
    };

    return params;
}

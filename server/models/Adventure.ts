import {Op} from 'sequelize';
import {
    AllowNull,
    AutoIncrement,
    BelongsToMany,
    Column,
    DataType,
    HasMany,
    Model,
    PrimaryKey,
    Scopes,
    Table
} from 'sequelize-typescript';
import {AdventureUser} from './AdventureUser';
import {Hashtag} from './Hashtag';
import {HashtagAdventure} from './HashtagAdventure';
import {Scene} from './Scene';
import {User} from './User';

@Scopes({
    full: {
        include: [
            {
                attributes: ['id', 'name', 'addressName'],
                model: () => Hashtag
            },
            {
                attributes: ['id'],
                model: () => Scene,
                where: {
                    isOpening: true
                }
            }
        ],
        where: {openingSceneId: {[Op.ne]: null}}
    }
})
@Table({
    paranoid: true,
    tableName: 'adventures',
    timestamps: true,
    underscored: true
})
export class Adventure extends Model<Adventure> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    title: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    description: string;

    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    hasImage: boolean;

    @BelongsToMany(() => Hashtag, () => HashtagAdventure)
    hashtags: Hashtag[];

    @HasMany(() => Scene)
    scenes: Scene;

    @AllowNull(true)
    @Column(DataType.NUMBER)
    openingSceneId: number | null;

    @BelongsToMany(() => User, () => AdventureUser)
    users: User[];
}

import {
    AllowNull,
    AutoIncrement,
    BelongsToMany,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';
import {Adventure} from './Adventure';
import {AdventureUser} from './AdventureUser';

@Table({
    paranoid: true,
    tableName: 'users',
    timestamps: true,
    underscored: true
})
export class User extends Model<User> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @AllowNull(false)
    @Column(DataType.TEXT)
    avatar: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    login: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    password: string;

    @BelongsToMany(() => Adventure, () => AdventureUser)
    adventures: Adventure[];
}

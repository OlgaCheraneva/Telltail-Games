import {AllowNull, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {Adventure} from './Adventure';
import {User} from './User';

@Table({
    paranoid: true,
    tableName: 'adventure_user',
    timestamps: true,
    underscored: true
})
export class AdventureUser extends Model<AdventureUser> {
    @ForeignKey(() => Adventure)
    @Column(DataType.INTEGER)
    adventureId: number;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    count: number;
}

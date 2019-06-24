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
import {HashtagAdventure} from './HashtagAdventure';

@Table({
    paranoid: true,
    tableName: 'hashtags',
    timestamps: true,
    underscored: true
})
export class Hashtag extends Model<Hashtag> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  addressName: string;

  @BelongsToMany(() => Adventure, () => HashtagAdventure)
  adventures: Adventure[];
}

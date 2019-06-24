import {Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {Adventure} from './Adventure';
import {Hashtag} from './Hashtag';

@Table({
    paranoid: true,
    tableName: 'hashtag_adventure',
    timestamps: true,
    underscored: true
})
export class HashtagAdventure extends Model<HashtagAdventure> {
  @ForeignKey(() => Hashtag)
  @Column(DataType.INTEGER)
  hashtagId: number;

  @ForeignKey(() => Adventure)
  @Column(DataType.INTEGER)
  adventureId: number;
}

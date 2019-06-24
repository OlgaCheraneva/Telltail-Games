import {Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {Achievement} from './Achievement';
import {Scene} from './Scene';

@Table({
    paranoid: true,
    tableName: 'achievement_scene',
    timestamps: true,
    underscored: true
})
export class AchievementScene extends Model<AchievementScene> {
  @ForeignKey(() => Achievement)
  @Column(DataType.INTEGER)
  achievementId: number;

  @ForeignKey(() => Scene)
  @Column(DataType.INTEGER)
  sceneId: number;
}

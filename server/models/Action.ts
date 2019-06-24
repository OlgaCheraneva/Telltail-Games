import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';
import {Scene} from './Scene';

@Table({
    paranoid: true,
    tableName: 'actions',
    timestamps: true,
    underscored: true
})
export class Action extends Model<Action> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  nextSceneId: number;

  @ForeignKey(() => Scene)
  @Column(DataType.INTEGER)
  sceneId: number;

  @BelongsTo(() => Scene)
  scene: Scene;
}

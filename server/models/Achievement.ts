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
import {AchievementScene} from './AchievementScene';
import {Scene} from './Scene';

@Table({
    paranoid: true,
    tableName: 'achievement',
    timestamps: true,
    underscored: true
})
export class Achievement extends Model<Achievement> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  imageDescription: string;

  @BelongsToMany(() => Scene, () => AchievementScene)
  scenes: Scene[];
}

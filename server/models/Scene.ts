import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';

import {Achievement} from './Achievement';
import {AchievementScene} from './AchievementScene';
import {Action} from './Action';
import {Adventure} from './Adventure';

enum DescriptionLocation {
  top_left,
  top_right,
  bottom_left,
  bottom_right
}

@Table({
    paranoid: true,
    tableName: 'scenes',
    timestamps: true,
    underscored: true
})
export class Scene extends Model<Scene> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  description: string;

  @AllowNull(false)
  @Column(DataType.ENUM('top_left', 'top_right', 'bottom_left', 'bottom_right'))
  descriptionLocation: DescriptionLocation;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  hasImage: boolean;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  isOpening: boolean;

  @AllowNull(false)
  @Column(DataType.STRING)
  imageDescription: string;

  @BelongsTo(() => Adventure)
  adventure: Adventure;

  @ForeignKey(() => Adventure)
  @Column(DataType.INTEGER)
  adventureId: number;

  @HasMany(() => Action)
  actions: Action[];

  @BelongsToMany(() => Achievement, () => AchievementScene)
  achievements: Achievement[];
}

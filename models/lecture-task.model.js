import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Task from './task.model';

const LectureTask = sequelize.define('lectureTask', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
    autoIncrement: true,
  },
  parentId: {
    type: DataTypes.INTEGER,
    field: 'parent_id',
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(128),
    field: 'name',
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(30000),
    field: 'description',
    allowNull: false,
  },
}, {
  tableName: 'lecture_task',
});

LectureTask.belongsTo(Task, { foreignKey: 'parentId' });

export default LectureTask;

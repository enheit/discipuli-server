import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Task from './task.model';

const LectureTask = sequelize.define('lectureTask', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  parentId: {
    type: DataTypes.INTEGER,
    field: 'parent_id',
    allowNull: false,
  },
  name: {
    type: DataTypes.VARCHAR(128),
    field: 'name',
    allowNull: false,
  },
  description: {
    type: DataTypes.VARCHAR(30000),
    field: 'description',
    allowNull: false,
  },
}, {
  tableName: 'lecture_task',
});

Task.belongsTo(LectureTask, { foreignKey: 'parentId' });

export default LectureTask;
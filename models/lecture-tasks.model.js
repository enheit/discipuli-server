import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import LectureTask from './lecture-task.model';
import Lecture from './lecture.model';

const LectureTasks = sequelize.define('lectureTasks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
    autoIncrement: true,
  },
  lectureId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'lecture_id',
  },
  lectureTaskId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'lecture_task_id',
  },
}, {
  tableName: 'lecture_tasks',
});

LectureTasks.belongsTo(Lecture, { foreignKey: 'lectureId' });
LectureTasks.belongsTo(LectureTask, { foreignKey: 'lectureTaskId' });

export default LectureTasks;

import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import LectureHomework from './lecture-homework.model';
import Lecture from './lecture.model';

const LectureHomeworks = sequelize.define('lectureHomeworks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'person_id',
  },
  lectureId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'lecture_id',
  },
  lectureHomeworkId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'lecture_homework_id',
  },
}, {
  tableName: 'lecture_homeworks',
});

Lecture.belongsTo(LectureHomeworks, { foreignKey: 'lectureId' });
LectureHomework.belongsTo(LectureHomeworks, { foreignKey: 'lectureHomeworkId' });

export default LectureHomeworks;
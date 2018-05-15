import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import LectureStatus from './lecture-status.model';

const Lecture = sequelize.define('lecture', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  name: {
    type: DataTypes.STRING(64),
    field: 'name',
  },
  lectureStatusId: {
    type: DataTypes.INTEGER,
    field: 'lecture_status_id',
  },
});

Lecture.belongsTo(LectureStatus, { foreignKey: 'lectureStatusId' });

export default Lecture;
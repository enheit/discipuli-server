import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

const LectureStatus = sequelize.define('lectureStatus', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  status: {
    type: DataTypes.STRING(16),
    field: 'status',
  },
}, {
  tableName: 'lecture_status',
});

export default LectureStatus;
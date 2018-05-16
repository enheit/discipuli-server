import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Homework from './homework.model';

const LectureHomework = sequelize.define('lectureHomework', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'person_id',
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
  tableName: 'lecture_homework',
});

Homework.belongsTo(LectureHomework, { foreignKey: 'parentId' });

export default LectureHomework;
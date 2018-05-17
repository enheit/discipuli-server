import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Presentation from './presentation.model';

const LecturePresentation = sequelize.define('lecturePresentation', {
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
    type: DataTypes.STRING(64),
    field: 'name',
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(30000),
    field: 'description',
    allowNull: false,
  },
}, {
  tableName: 'lecture_presentation',
});

Presentation.belongsTo(LecturePresentation, { foreignKey: 'parentId' });

export default LecturePresentation;
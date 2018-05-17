import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Person from './person.model';
import Lecture from './lecture.model';

const LectureComments = sequelize.define('lectureComments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'person_id',
  },
  lectureId: {
    type: DataTypes.INTEGER,
    field: 'lecture_id',
    allowNull: false,
  },
  personId: {
    type: DataTypes.INTEGER,
    field: 'person_id',
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING(1024),
    field: 'comment',
    allowNull: false,
  },
}, {
  tableName: 'lecture_comments',
});

Lecture.belongsTo(LectureComments, { foreignKey: 'lectureId' });
Person.belongsTo(LectureComments, { foreignKey: 'personId' });

export default LectureComments;
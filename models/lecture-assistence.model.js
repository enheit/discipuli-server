import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Person from './person.model';
import Lecture from './lecture.model';

const LectureAssistence = sequelize.define('lectureAssistence', {
  personId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'person_id',
  },
  lectureId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'lecture_id',
  },
}, {
  tableName: 'lecture_assistence',
});

Person.belongsTo(LectureAssistence, { foreignKey: 'personId' });
Lecture.belongsTo(LectureAssistence, { foreignKey: 'lectureId' });

export default LectureAssistence;
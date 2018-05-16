import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Course from './course.model';
import Person from './person.model';
import LecturePresentation from './lecture-presentation.model';

const Lecture = sequelize.define('lecture', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  courseId: {
    type: DataTypes.INTEGER,
    field: 'course_id',
    allowsNull: false,
  },
  lecturerId: {
    type: DataTypes.INTEGER,
    field: 'lecturer_id',
    allowsNull: false,
  },
  lecturePresentationId: {
    type: DataTypes.INTEGER,
    field: 'lecture_presentation_id',
    allowsNull: false,
  },
  name: {
    type: DataTypes.STRING(128),
    field: 'name',
    allowsNull: false,
  },
  startDate: {
    type: DataTypes.STRING(128),
    field: 'startDate',
  },
  duration: {
    type: DataTypes.DATE,
    field: 'duration',
  },
});

Course.belongsTo(Lecture, { foreignKey: 'courseId' });
Person.belongsTo(Lecture, { foreignKey: 'personId' });
LecturePresentation.belongsTo(Lecture, { foreignKey: 'lecturePresentationId' });

export default Lecture;
import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Course from './course.model';
import PersonAccount from './person-account.model';
import LecturePresentation from './lecture-presentation.model';

const Lecture = sequelize.define('lecture', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
    autoIncrement: true,
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
    type: DataTypes.DATE,
    field: 'start_date',
  },
  endDate: {
    type: DataTypes.DATE,
    field: 'end_date',
  },
});

Lecture.belongsTo(Course, { foreignKey: 'courseId' });
Lecture.belongsTo(PersonAccount, { foreignKey: 'lecturerId' });
Lecture.belongsTo(LecturePresentation, { foreignKey: 'lecturePresentationId' });

export default Lecture;

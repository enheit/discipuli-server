import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Specialization from './specialization.model';
import Course from './course.model';

const Courses = sequelize.define('courses', {
  specializationId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'specialization_id',
  },
  courseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'course_id',
  },
});

Courses.belongsTo(Specialization, { foreignKey: 'specializationId' });
Courses.belongsTo(Course, { foreignKey: 'courseId' });

export default Courses;
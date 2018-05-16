import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Person from './person.model';
import Course from './course.model';

const Subscriptions = sequelize.define('subscriptions', {
  personId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'person_id',
  },
  courseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'course_id',
  },
});

Person.belongsTo(Subscriptions, { foreignKey: 'personId' });
Course.belongsTo(Subscriptions, { foreignKey: 'courseId' });

export default Subscriptions;
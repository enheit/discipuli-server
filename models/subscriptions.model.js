import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import PersonAccount from './person-account.model';
import Course from './course.model';

const Subscriptions = sequelize.define('subscriptions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
    autoIncrement: true,
  },
  personAccountId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'person_account_id',
  },
  courseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'course_id',
  },
});

Subscriptions.belongsTo(PersonAccount, { foreignKey: 'personAccountId' });
Subscriptions.belongsTo(Course, { foreignKey: 'courseId' });

export default Subscriptions;

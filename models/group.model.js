import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Course from './course.model';

const Group = sequelize.define('group', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  courseId: {
    type: DataTypes.INTEGER,
    field: 'course_id',
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(64),
    field: 'name',
    allowNull: false,
  },
  maxMembersNumbers: {
    type: DataTypes.SMALLINT,
    field: 'max_members_number',
    allowNull: false,
  },
});

Course.belongsTo(Group, { foreignKey: 'courseId' });

export default Group;
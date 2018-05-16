import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Person from './person.model';
import Group from './group.model';

const GroupMembers = sequelize.define('groupMembers', {
  personId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'person_id',
  },
  groupId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'group_id',
  },
}, {
  tableName: 'group_members',
});

GroupMembers.belongsTo(Person, { foreignKey: 'personId' });
GroupMembers.belongsTo(Group, { foreignKey: 'groupId' });

export default GroupMembers;
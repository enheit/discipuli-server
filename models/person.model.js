import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import PersonRole from './person-role.model';

const Person = sequelize.define('person', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  firstName: {
    type: DataTypes.STRING(254),
    field: 'first_name',
  },
  lastName: {
    type: DataTypes.STRING(1024),
    field: 'last_name',
  },
  about: {
    type: DataTypes.STRING(1024),
    field: 'about'
  },
  roleId: {
    type: DataTypes.INTEGER,
    field: 'role_id',
  }
});

Person.belongsTo(PersonRole, { foreignKey: 'roleId' });

export default Person;
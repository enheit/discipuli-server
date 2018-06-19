import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import PersonRole from './person-role.model';
import Person from './person.model';

const PersonAccount = sequelize.define('personAccount', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING(254),
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    }
  },
  passwordHash: {
    type: DataTypes.STRING(1024),
    field: 'password_hash',
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  roleId: {
    type: DataTypes.INTEGER,
    field: 'role_id',
    allowNull: false,
  },
  personId: {
    type: DataTypes.INTEGER,
    field: 'person_id',
    unique: true,
    allowNull: false,
  }
}, {
  tableName: 'person_account',
});

PersonAccount.belongsTo(PersonRole, { foreignKey: 'roleId' });
PersonAccount.belongsTo(Person, { foreignKey: 'personId' });

export default PersonAccount;

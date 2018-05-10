import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Person from './person.model';

const personAccount = sequelize.define('personAccount', {
  personId: {
    type: DataTypes.INTEGER,
    field: 'person_id',
  },
  email: DataTypes.STRING(254),
  passwordHash: {
    type: DataTypes.STRING(1024),
    field: 'password_hash'
  }
}, {
  tableName: 'person_account',
});

personAccount.removeAttribute('id');

personAccount.belongsTo(Person);

export default personAccount;
import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

const personRole = sequelize.define('personRole', {
  id: {
    type: DataTypes.INTEGER,
    field: 'id',
    primaryKey: true,
  },
  role: {
    type: DataTypes.STRING(1024),
    field: 'role'
  }
}, {
  tableName: 'person_role'
});

export default personRole;
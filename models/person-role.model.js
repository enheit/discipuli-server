import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

const PersonRole = sequelize.define('personRole', {
  id: {
    type: DataTypes.INTEGER,
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  },
  role: {
    type: DataTypes.STRING(1024),
    field: 'role',
    unique: true,
    allowNull: false,
  }
}, {
  tableName: 'person_role'
});

export default PersonRole;
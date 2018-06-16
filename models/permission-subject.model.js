import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

const PermissionSubject = sequelize.define('permissionSubject', {
  id: {
    type: DataTypes.INTEGER,
    field: 'id',
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(64),
    field: 'name',
    unique: true,
    allowNull: false,
  }
}, {
  tableName: 'permission_subject'
});

export default PermissionSubject;
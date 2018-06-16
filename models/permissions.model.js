import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import PersonRole from './person-role.model';
import PermissionSubject from './permission-subject.model';

const Permissions = sequelize.define('permissions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  roleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'role_id',
  },
  permissionSubjectId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'permission_subject_id',
  },
  action: {
    type: DataTypes.STRING(32),
  },
});

Permissions.belongsTo(PersonRole, { foreignKey: 'roleId' });
Permissions.belongsTo(PermissionSubject, { foreignKey: 'permissionSubjectId' });

export default Permissions;
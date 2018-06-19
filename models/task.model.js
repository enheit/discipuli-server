import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import PersonAccount from './person-account.model';
import Specialization from './specialization.model';

const Task = sequelize.define('task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(128),
    field: 'name',
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(30000),
    field: 'description',
    allowNull: false,
  },
  specializationId: {
    type: DataTypes.INTEGER,
    field: 'specialization_id',
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    field: 'created_by',
    allowNull: false,
  },
});

Task.belongsTo(Specialization, { foreignKey: 'specializationId' });
Task.belongsTo(PersonAccount, { foreignKey: 'createdBy' });

export default Task;

import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Person from './person.model';
import Specialization from './specialization.model';

const Task = sequelize.define('task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
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
  name: {
    type: DataTypes.VARCHAR(128),
    field: 'name',
    allowNull: false,
  },
  description: {
    type: DataTypes.VARCHAR(30000),
    field: 'description',
    allowNull: false,
  },
});

Specialization.belongsTo(Task, { foreignKey: 'specializationId' });
Person.belongsTo(Task, { foreignKey: 'createdBy' });

export default Task;
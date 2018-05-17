import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Person from './person.model';
import Specialization from './specialization.model';

const Homework = sequelize.define('homework', {
  personId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'person_id',
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
    type: DataTypes.STRING(128),
    field: 'name',
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(30000),
    field: 'description',
    allowNull: false,
  },
});

Specialization.belongsTo(Homework, { foreignKey: 'specializationId' });
Person.belongsTo(Homework, { foreignKey: 'createdBy' });

export default Homework;
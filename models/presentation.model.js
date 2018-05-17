import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Person from './person.model';
import Specialization from './specialization.model';

const Presentation = sequelize.define('presentation', {
  personId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'person_id',
  },
  specializationId: {
    type: DataTypes.INTEGER,
    field: 'specialization_id',
    allowsNull: false,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    field: 'created_by',
    allowsNull: false,
  },
  name: {
    type: DataTypes.STRING(128),
    field: 'name',
    allowsNull: false,
  },
  description: {
    type: DataTypes.STRING(30000),
    field: 'description',
    allowsNull: false,
  },
});

Specialization.belongsTo(Presentation, { foreignKey: 'specializationId' });
Person.belongsTo(Presentation, { foreignKey: 'createdBy' });

export default Presentation;
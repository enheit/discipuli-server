import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import PersonAccount from './person-account.model';
import Specialization from './specialization.model';

const Presentation = sequelize.define('presentation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
    autoIncrement: true,
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
});

Presentation.belongsTo(Specialization, { foreignKey: 'specializationId' });
Presentation.belongsTo(PersonAccount, { foreignKey: 'createdBy' });

export default Presentation;

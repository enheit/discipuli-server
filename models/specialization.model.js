import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

const Specialization = sequelize.define('specialization', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  name: {
    type: DataTypes.STRING(64),
    field: 'name',
    allowNull: false,
  },
});

export default Specialization;
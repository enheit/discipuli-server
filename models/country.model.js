import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

const Country = sequelize.define('country', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  code: {
    type: DataTypes.STRING(3),
    field: 'code',
  },
  name: {
    type: DataTypes.STRING(64),
    field: 'name',
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    field: 'is_active'
  },
});

export default Country;
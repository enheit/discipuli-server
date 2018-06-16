import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import Country from './country.model';

const City = sequelize.define('city', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  countryId: {
    type: DataTypes.INTEGER,
    field: 'country_id',
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(36),
    field: 'name',
    allowNull: false,
    validate: {
      len: [3, 36],
      notEmpty: true,
    },
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    field: 'is_active',
    allowNull: false,
  },
});

City.belongsTo(Country, { foreignKey: 'countryId' });

export default City;
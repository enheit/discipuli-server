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
    field: 'country_id'
  },
  name: {
    type: DataTypes.STRING(36),
    field: 'name',
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    field: 'is_active',
  },
});

Country.belongsTo(City, { foreignKey: 'countryId' });

export default City;
import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import City from './city.model';

const Course = sequelize.define('course', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
  },
  cityId: {
    type: DataTypes.INTEGER,
    field: 'city_id',
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(64),
    field: 'name',
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    field: 'start_date',
  },
  endDate: {
    type: DataTypes.DATE,
    field: 'end_date'
  },
});

Course.belongsTo(City, { foreignKey: 'cityId' });

export default Course;
import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

import City from './city.model';

const Course = sequelize.define('course', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
    autoIncrement: true,
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
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    field: 'end_date',
    allowNull: false,
  },
});

Course.belongsTo(City, { foreignKey: 'cityId' });

export default Course;
import { DataTypes } from 'sequelize';
import sequelize from './models.setup';

const Person = sequelize.define('person', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id',
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING(254),
    field: 'first_name',
    allowNull: false,
    validate: {
      len: [2, 15],
      notEmpty: true,
    }
  },
  lastName: {
    type: DataTypes.STRING(1024),
    field: 'last_name',
    allowNull: false,
    validate: {
      len: [2, 30],
      notEmpty: true,
    }
  },
  about: {
    type: DataTypes.STRING(1024),
    field: 'about',
  },
});

export default Person;

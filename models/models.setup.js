import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'discipuli',
  'dpadmin',
  'dpadmin',
  {
    dialect: 'postgres',
    define: {
      freezeTableName: true,
      timestamps: false,
    }
  },
);

export default sequelize;
'use strict';


module.exports = (sequelize, DataTypes) => {
  return sequelize.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    savory: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};

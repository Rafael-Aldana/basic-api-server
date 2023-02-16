'use strict';

module.exports = ( sequelizeDatabase, DataTypes ) => {
  return sequelizeDatabase.define( 'customers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pronouns: {
      type: DataTypes.ENUM,
      values: [ 'he/him', 'she/her', 'they/them'],
      allowNull: true,
    },
  });
};

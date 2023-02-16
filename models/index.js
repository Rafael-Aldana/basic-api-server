'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const { customerModel } = require('./customer');
const { foodModel } = require('./food');
const { clothesModel } = require('./clothes');
// if sqlite:memory is not available, use sqlite::memory
const DATABASE_URL = process.env.NODE_ENV === 'test'? 'sqlite:memory:' : process.env.DATABASE_URL;

// const DATABASE_URL = process.env.DATABASE_URL;

// db singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const customerModel = customer(sequelizeDatabase, DataTypes);
const foodModel = food(sequelizeDatabase, DataTypes);
const clothesModel = clothes(sequelizeDatabase, DataTypes);
module.exports = {
  sequelizeDatabase,
  customerModel,
  foodModel,
  clothesModel,
};

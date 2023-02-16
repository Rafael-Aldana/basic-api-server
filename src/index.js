'use strict';

const { startServer } = require('./server');
require ('dotenv').config();
const { sequelizeDatabase } = require('./models/index');

sequelizeDatabase.sync()
.then(() => {
console.log('Successfully connected to the database');
startServer();
})
.catch(error => console.log(error));



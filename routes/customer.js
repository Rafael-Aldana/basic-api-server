'use strict';

const express = require('express');
const customerModel = require('../models/index');

const router = express.Router();

router.get('/customer', async (req, res, next) => {
  const customer = await customerModel.findAll();
  res.status(200).json(customer);
});

router.post('/customer', async (req, res, next) => {
  try {
    const newCustomer = await customerModel.create(req.body);
    res.status(200).send(newCustomer);
  } catch (error) {
    next(error);
  }
})

module.exports = router;

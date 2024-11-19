const express = require('express');
const { getAllCustomers } = require('../controllers/CustomerController');
const customerRouter = express.Router();

customerRouter.get("/", getAllCustomers);
module.exports =  customerRouter ;
const { getAllCustomers, addCustomer } = require('../controllers/CustomerController');
const express = require('express');
const customerRouter = express.Router();

customerRouter.get("/", getAllCustomers);
customerRouter.get("/:id", getSpecificCustomer);
customerRouter.post("/", addCustomer);
customerRouter.put("/:id", updateCustomer);
customerRouter.delete("/:id", deleteCustomer);
module.exports = customerRouter;
const express = require('express')
const { updateTransaction} = require("../controllers/index")
const schema = require("../schemas")
const {validationMiddleware} = require("../middlewares")
const router = express.Router()

// example of a route with index controller get function

//Checkin if properties (user (user ID), categorie (categorie ID), date and amount) exist.
router.put("/:id", schema.transactionSchema, validationMiddleware, updateTransaction)

module.exports = router





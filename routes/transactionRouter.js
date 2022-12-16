const express = require('express')
const { getTransactions, createTransaction, getOneTransaction, updateTransaction } = require("../controllers/index")
const { validationMiddleware } = require('../middlewares')
const  schema  = require('../schemas');
const router = express.Router()

//route to get all transactions
router.get("/", getTransactions)
//route to get one transaction
router.get("/:id",getOneTransaction)
//route to create a transaction
router.post("/", schema.transactionSchema, validationMiddleware, createTransaction)
//route to edit one transaction
router.put("/:id", schema.transactionSchema, validationMiddleware, updateTransaction)




module.exports = router
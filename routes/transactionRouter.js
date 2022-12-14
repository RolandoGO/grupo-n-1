const express = require('express')
const { getTransactions, createTransaction } = require("../controllers/index")
const { validationMiddleware } = require('../middlewares')
const  schema  = require('../schemas');
const router = express.Router()

router.get("/", getTransactions)
router.post("/", schema.transactionSchema, validationMiddleware, createTransaction)

module.exports = router
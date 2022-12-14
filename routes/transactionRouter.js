const express = require('express')
const { getTransactions, createTransaction, getOneTransaction } = require("../controllers/index")
const { validationMiddleware } = require('../middlewares')
const  schema  = require('../schemas');
const router = express.Router()


router.post("/", schema.transactionSchema, validationMiddleware, createTransaction)
router.get("/", getTransactions)
router.get("/:id",getOneTransaction)



module.exports = router
const express = require('express')
const { getTransactions, createTransaction, getOneTransaction, updateTransaction, deleteTransaction} = require("../controllers/index")
const { validationMiddleware, ownershipMiddleware,  authUserMiddleware} = require('../middlewares')
const  schema  = require('../schemas');
const router = express.Router()

//route to get all transactions
router.get("/", authUserMiddleware, ownershipMiddleware, getTransactions)
//route to get one transaction
router.get("/:id", authUserMiddleware, ownershipMiddleware ,getOneTransaction)
//route to create a transaction
router.post("/", schema.transactionSchema, validationMiddleware, createTransaction)
//route to edit one transaction
router.put("/:id", schema.transactionSchema, validationMiddleware, authUserMiddleware, ownershipMiddleware, updateTransaction)
//route for deleting transaction
router.delete("/:id", authUserMiddleware, ownershipMiddleware,  deleteTransaction)



module.exports = router
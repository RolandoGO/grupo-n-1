const express = require('express')
const { getTransactions, getOneTransaction } = require("../controllers/index")
const router = express.Router()

router.get("/", getTransactions)
router.get("/:id",getOneTransaction)


module.exports = router
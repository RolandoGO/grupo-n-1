const express = require('express')
const { getTransactions } = require("../controllers/index")
const router = express.Router()

router.get("/", getTransactions)

module.exports = router
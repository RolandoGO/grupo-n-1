const express = require('express')
const { updateTransaction} = require("../controllers/index")
const router = express.Router()

// example of a route with index controller get function

//must add middleware for validation of properties
router.put("/:id",  updateTransaction)

module.exports = router





const express = require('express')
const { deleteTransaction} = require("../controllers/index")
const router = express.Router()

// example of a route with index controller get function

//must add middleware for validation of properties
router.delete("/:id",  deleteTransaction)

module.exports = router





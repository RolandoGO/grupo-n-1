const express = require('express')
const { updateTransaction} = require("../controllers/index")
const router = express.Router()

// example of a route with index controller get function

//Checkin if properties (userId, categorieId, date and amount) exist.
router.put("/:id",  updateTransaction)

module.exports = router





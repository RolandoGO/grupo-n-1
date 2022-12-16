const express = require('express')
const { deleteTransaction} = require("../controllers/index")
const router = express.Router()

//route for deleting transaction
router.delete("/:id",  deleteTransaction)

module.exports = router





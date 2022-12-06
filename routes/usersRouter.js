const express = require('express')
const {getUserData} = require("../controllers/index")
const router = express.Router()

// example of a route with index controller get function
router.get("/:id", getUserData)

module.exports = router
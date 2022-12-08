const express = require('express')
const {deleteUser} = require("../controllers")
const router = express.Router()

// example of a route with index controller get function
router.delete("/users/:id", deleteUser)

module.exports = router

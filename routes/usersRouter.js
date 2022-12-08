const express = require('express')
const {getUsers} = require("../controllers/index")
const router = express.Router()

//get all users
router.get("/", getUsers)

module.exports = router

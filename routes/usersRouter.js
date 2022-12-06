const express = require('express')
const {getUsers, createUser} = require("../controllers/index")
const router = express.Router()

//get all users
router.get("/", getUsers)
router.post("/", createUser)

module.exports = router

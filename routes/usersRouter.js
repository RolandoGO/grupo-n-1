const express = require('express')
const {getUserData, getUsers createUser} = require("../controllers/index")
const router = express.Router()

//get all users
router.get("/", getUsers)
//get user data 
router.get("/:id", getUserData)
//create user
router.post("/", createUser)




module.exports = router


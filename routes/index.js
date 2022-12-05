const express = require('express')
const {User} = require("../database/index")
const {endpointResponse} = require("../helpers/success")
const createError = require("http-errors")
const router = express.Router()

// example of a route with index controller get function
router.get('/', (req,res)=> res.send("en pagina de inicio"))




module.exports = router

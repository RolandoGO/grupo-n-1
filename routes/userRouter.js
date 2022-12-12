const express = require('express')
const {createUser} = require("../controllers/index")
const { validationMiddleware } = require('../middlewares')
const  {schema}  = require('../schemas');
const router = express.Router()

router.post("/", schema, validationMiddleware, createUser)


module.exports = router

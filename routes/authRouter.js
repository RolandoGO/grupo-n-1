const express = require('express')
const { login } = require("../controllers/authController")
const { validationMiddleware } = require('../middlewares')
const  schema  = require('../schemas');
const router = express.Router()

//login route with middelware for checking that the email and password are not empty
router.post("/login", schema.authSchema, validationMiddleware, login)

module.exports = router
const express = require('express')
const transactionRouter = require("./transactionRouter")
const router = express.Router()

// example of a route with index controller get function
router.get('/', (req,res)=> res.send("en pagina de inicio"))
router.use('/transactions',transactionRouter)

module.exports = router

const express = require('express')
const transactionsRouter = require("./transactionsRouter")
const router = express.Router()

// example of a route with index controller get function
router.get('/', (req,res)=> res.send("en pagina de inicio"))
router.use("/transactions", transactionsRouter)

module.exports = router

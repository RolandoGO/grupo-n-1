const express = require('express')
const transactionsRouter = require("./transactionsRouter")
const userRouter = require("./userRouter")
const categoryRouter = require("./categoryRouter")
const router = express.Router()

// example of a route with index controller get function
router.get('/', (req,res)=> res.send("en pagina de inicio"))
router.use("/transactions", transactionsRouter)
router.use("/users", userRouter)
router.use("/categories", categoryRouter)



module.exports = router

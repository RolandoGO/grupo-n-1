const express = require('express')
const transactionsRouter = require("./transactionsRouter")
const userRouter = require("./userRouter")
const categoryRouter = require("./categoryRouter")
const uploadRouter = require("./uploadRouter")

const router = express.Router()

// example of a route with index controller get function
router.get('/', (req,res)=> res.send("en pagina de inicio"))
router.use("/transactions", transactionsRouter)
router.use("/users", userRouter)
router.use("/categories", categoryRouter)
router.use("/uploads", uploadRouter)



module.exports = router

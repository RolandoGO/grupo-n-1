const express = require('express')
const transactionRouter = require("./transactionRouter")
const userRouter = require("./userRouter")
const authRouter = require("./authRouter")
const categoryRouter = require("./categoryRouter")
const router = express.Router()

//Router file for redirecting to the correct entity

router.get('/', (req,res)=> res.send("en pagina de inicio"))
//router for transactions
router.use("/transactions", transactionRouter)
//router for users
router.use("/users", userRouter)
//router for login
router.use("/auth", authRouter)
//router for categories
router.use("/categories", categoryRouter)


module.exports = router

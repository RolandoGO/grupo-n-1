const express = require('express')
const userRouter =  require("./userRouter")
const router = express.Router()

// example of a route with index controller get function
router.get('/', (req,res)=> res.send("en pagina de inicio"))
router.use("/users", userRouter)

module.exports = router

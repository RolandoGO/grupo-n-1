const express = require('express')
const userRouter = require("./userRouter")
// const { validationUser } = require('../middlewares')
// const { schemaUser } = require('../schemas');
const router = express.Router()

// example of a route with index controller get function
router.get('/', (req,res)=> res.send("en pagina de inicio"))
router.use("/users", userRouter)




// example of a route with index controller get function
// router.post('/',schemaUser,
//   validationUser,(req,res) => res.json(req.body)
//   )


module.exports = router

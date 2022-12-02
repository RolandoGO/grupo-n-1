const express = require('express')

const router = express.Router()

// example of a route with index controller get function
router.get('/', (req,res)=> res.send("en pagina de inicio"))


module.exports = router

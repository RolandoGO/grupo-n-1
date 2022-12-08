const express = require('express')
const {updateUser} = require("../controllers/index")
const router = express.Router()

router.put("/:id", updateUser)

module.exports = router

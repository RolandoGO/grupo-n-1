const express = require("express")
const { uploadFile } = require("../controllers/index")
const router = express.Router()
const { uploadMiddleware } = require("../middlewares")

router.post("/",uploadMiddleware,uploadFile)

module.exports = router
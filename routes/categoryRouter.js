const express = require('express')
const { getCategories, getCategory, createCategory, updateCategory } = require("../controllers/index")
const router = express.Router()

router.get("/", getCategories)
router.get("/:id", getCategory)
router.post("/", createCategory)
router.put("/:id", updateCategory)




module.exports = router
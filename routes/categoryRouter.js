const express = require('express')
const { getCategories, getCategory, createCategory, updateCategory } = require("../controllers/index")
const router = express.Router()

//route for getting all categories
router.get("/", getCategories)
//route for getting one categorie
router.get("/:id", getCategory)
//eroute to create a categorie
router.post("/", createCategory)
//route to edit a categorie
router.put("/:id", updateCategory)




module.exports = router
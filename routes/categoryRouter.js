const express = require('express')
const { getCategories, getCategory, createCategory, updateCategory, deleteCategory } = require("../controllers/index")
const router = express.Router()

//route for getting all categories
router.get("/", getCategories)
//route for getting one category
router.get("/:id", getCategory)
//eroute to create a category
router.post("/", createCategory)
//route to edit a category
router.put("/:id", updateCategory)
//route to delete a category
router.delete("/:id", deleteCategory)




module.exports = router
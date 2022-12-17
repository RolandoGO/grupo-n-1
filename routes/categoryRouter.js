const express = require('express')
const { getCategories, getCategory, createCategory, updateCategory, deleteCategory } = require("../controllers/index")
const router = express.Router()

/**
 * @swagger
 * /categories:
 *  get:
 *    security:
 *      - api_key: []
 *    tags:
 *      - Categories
 *    summary: Finds all Categories
 *    responses:
 *      200:
 *        description: successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: true
 *                code:
 *                  type: integer
 *                  example: 200
 *                message:
 *                  type: Categories retrieved successfully, there are ${ data.length} categories in the database
 *                body:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      name:
 *                        type: string
 *                        example: incomes
 *                      description:
 *                        type: string
 *                        example: money incomes
 *                      createdAt:
 *                        type: string
 *                        format: date-time
 *                      updatedAt:
 *                        type: string
 *                        format: date-time
 */
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
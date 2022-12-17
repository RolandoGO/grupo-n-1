const express = require("express")
const {createUser,updateUser, deleteUser, getUsers, getUserData} = require("../controllers/index")
const { validationMiddleware, authUserMiddleware, ownershipMiddleware } = require('../middlewares')
const  schema  = require('../schemas');
const router = express.Router()



//route to get all users
router.get("/", authUserMiddleware, ownershipMiddleware, getUsers)

/**
 * @swagger
 * /users:
 *  get:
 *    security:
 *      - api_key: []
 *    tags:
 *      - Users
 *    summary: Finds all Users
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
 *                  type: Users retrieved successfully, there are ${response?.length} users in the database
 *                body:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      firstName:
 *                        type: string
 *                        example: Carlos
 *                      lastName:
 *                        type: string
 *                        example: Gonzalez
 *                      email:
 *                        type: string
 *                        example: carlosgonzalez
 *                      createdAt:
 *                        type: string
 *                        format: date-time
*/
router.get("/",  authUserMiddleware, ownershipMiddleware, getUsers)

//route to get a user
router.get("/:id", authUserMiddleware, ownershipMiddleware, getUserData)
//route that use schema and middleware for checking that the properties exist in the req before passing to the user controller
router.post("/", schema.userSchema, validationMiddleware, createUser)
//route for update user
router.put("/:id",authUserMiddleware, ownershipMiddleware, updateUser)
//route for deleting user
router.delete("/:id",authUserMiddleware, ownershipMiddleware, deleteUser)


module.exports = router

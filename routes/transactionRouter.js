const express = require('express')
const { getTransactions, createTransaction, getOneTransaction, updateTransaction, deleteTransaction} = require("../controllers/index")
const { validationMiddleware, ownershipMiddleware,  authUserMiddleware} = require('../middlewares')
const  schema  = require('../schemas');
const router = express.Router()


/**
 * @swagger
 * /transactions:
 *  get:
 *    security:
 *      - api_key: []
 *    tags:
 *      - Transactions
 *    summary: Finds all Transactions
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
 *                  type: string
 *                  example: All Transactions
 *                body:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: integer
 *                        format: int64
 *                        example: 1
 *                      description:
 *                        type: string
 *                        example: Recarga
 *                      amount:
 *                        type: float
 *                        example: 123.13
 *                      date:
 *                        type: string
 *                        format: date-time
 *                      userId:
 *                        type: integer
 *                        format: int64
 *                        example: 10
 *                      categoryId:
 *                        type: integer
 *                        format: int64
 *                        example: 1
 *      401:
 *        $ref: "#/components/responses/UnauthorizedError"
 */
router.get("/", authUserMiddleware, ownershipMiddleware, getTransactions)
//route to get one transaction
router.get("/:id", authUserMiddleware, ownershipMiddleware ,getOneTransaction)
//route to create a transaction
router.post("/", schema.transactionSchema, validationMiddleware, createTransaction)
//route to edit one transaction
router.put("/:id", schema.transactionSchema, validationMiddleware, authUserMiddleware, ownershipMiddleware, updateTransaction)
//route for deleting transaction
router.delete("/:id", authUserMiddleware, ownershipMiddleware,  deleteTransaction)



module.exports = router
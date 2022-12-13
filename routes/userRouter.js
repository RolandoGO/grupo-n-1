
const {createUser,updateUser} = require("../controllers/index")
const { validationMiddleware } = require('../middlewares')
const  schema  = require('../schemas');
const router = express.Router()

//route that use schema and middleware for checking that the properties exist in the req before passing to the user controller
router.post("/", schema.userSchema, validationMiddleware, createUser)
//route for update user
router.put("/:id", updateUser)




module.exports = router

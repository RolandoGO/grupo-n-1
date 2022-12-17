const { validationResult } = require('express-validator'); 
const {ErrorObject} = require("../helpers/error")
const multer  = require('multer')
const uniqid = require('uniqid')
const {jwtMiddlewareVerify} = require("./jwt")
const {Role, Transaction} = require("../database/models")


//middleware for checking fields working with the schema file.
const validationMiddleware = function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}

//middleware for uploadin images
const uploadMiddleware = multer({ 
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${uniqid()}-${ Date.now() }${file.originalname}`)
    }
  }),
  fileFilter: (req, file, cb) => {
      if (['image/png', 'image/jpg', 'image/svg+xml','image/webp'].includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new ErrorObject('Only .png, .jpg and .svg and .wepb formats are allowed',400));
      }
    } 
}).single('file')


//middleware for checking token in authorization header
const authUserMiddleware = (req,res,next)=>{

  //check if the token is in the header auth
  const headerAuth = req.headers["authorization"]
  //token is after the Bearer word
  const token = headerAuth && headerAuth.split(" ")[1]

  if(!token){
    return res.status(403).json({ errors: "no token found" });
  }
//if there is a token check if the token is valid
  const isTokenValid = jwtMiddlewareVerify(token)

  if(!isTokenValid){
    return res.status(403).json({ errors: "invalid token" });
  }

  //if the token is valid, send the token data decode and verify in the user propertie inside the body
  req.user = isTokenValid
 
  next()
  
  }



  //middleware for checking if the id in params or querys are the same that the one of the current user, or if the current user is admin
  const ownershipMiddleware = async(req,res,next)=>{

    const currentUser = req.user
    
    //checkin if the current user is client or admin
    const call = await Role.findOne({where:{id:currentUser.roleId}})
    const currentUserRole = call.name
    const id = req.params.id || req.query.id
    
    if(id){ 
      
      
      //if is the user is the same or is admin pass to the controller
        if(Number(id) === currentUser.id || currentUserRole === "admin" ){ 
          next()
          return
        }
        
          //if the user is not the same as the id in the route or is not admin
          return res.status(403).json({ errors: "not authorize" });

    }
    if(!id){
      
      if(currentUserRole==="admin"){
       next()
       return
      }

      //if the user is not admin
      return res.status(403).json({ errors: "not authorize" });

    }
  }


//middleware for checking transaction routes
const transactionMiddleware = async(req,res,next)=>{

  const currentUser = req.user
  const {id} =req.params
  let currentUserRole;

  if(!id){
    return res.status(404).json({ errors: "id not found in the params" });

  }

  try{
    //checkin if the current user is client or admin
    const call = await Role.findOne({where:{id:currentUser.roleId}})
    currentUserRole = call.name

  }
  catch{
    return res.status(500).json({ errors: "role not found in the database" });

  }

  
  try{
    const transaction = await Transaction.findOne({where:{id}})

    if(!transaction){
      return res.status(404).json({ errors: "transaction not found" });

    }

    const userId_in_transaction = transaction.dataValues.userId

    //if is the user is the same or is admin pass to the controller
    if(Number(userId_in_transaction) === currentUser.id || currentUserRole === "admin" ){ 
      next()
      return
    }
    //   //if the user is not the same as the id in the route or is not admin
      return res.status(403).json({ errors: "not authorize" });

  }
  catch{
    return res.status(500).json({ errors: "error in the database" });

  }

}


module.exports = { validationMiddleware,uploadMiddleware, authUserMiddleware, ownershipMiddleware, transactionMiddleware }


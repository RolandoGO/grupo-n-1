const { validationResult } = require('express-validator'); 
const {ErrorObject} = require("../helpers/error")
const multer  = require('multer')
const uniqid = require('uniqid')
const {jwtMiddlewareVerify} = require("./jwt")



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
  req.body.user = isTokenValid
  next()
  
  }

module.exports = { validationMiddleware,uploadMiddleware, authUserMiddleware }


const { validationResult } = require('express-validator'); 
const {ErrorObject} = require("../helpers/error")
const multer  = require('multer')
const uniqid = require('uniqid')



const validationMiddleware = function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}

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

module.exports = { validationMiddleware,uploadMiddleware }
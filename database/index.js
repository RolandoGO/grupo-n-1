const db = require("./models")
const {DataTypes} = require("sequelize")
const User = require("./models/user")(db.sequelize, DataTypes)

module.exports={
    User
}



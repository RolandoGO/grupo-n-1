const { Transaction } = require("../database/models")


module.exports ={
    getTransactionsService: async ()=>{
        const data = await Transaction.findAll({})
        return data
    }
}
const { Transaction } = require("../database/models")
const {ErrorObject} = require("../helpers/error")


module.exports ={
    getTransactionsService: async ()=>{
        const data = await Transaction.findAll({})
        return data
    },
    createTransactionService: async (data)=>{
        const response = await Transaction.create(data)    
        return response
    }
}
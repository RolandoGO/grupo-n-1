const { Transaction } = require("../database/models")


module.exports ={
    getTransactionsService: async ()=>{
        const data = await Transaction.findAll({})
        return data
    },
    getTransactionService: async (id)=>{
        const data = await Transaction.findOne({
            where: { id }
        })
        return data
    }
}
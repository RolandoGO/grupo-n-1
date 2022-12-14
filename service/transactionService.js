const { Transaction } = require("../database/models")
const { ErrorObject } = require("../helpers/error")


module.exports ={
    getTransactionsService: async ()=>{
        const data = await Transaction.findAll({})
        return data
    },
    getTransactionService: async (id)=>{
        const data = await Transaction.findOne({
            where: { id }
        })

        if(!data){
            throw new ErrorObject("No Transaction was found with that id", 404)
        }
        return data
    }
}
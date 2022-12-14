const {Transaction} = require("../database/models")
const {ErrorObject} =   require("../helpers/error")

module.exports ={
    getTransactionsService: async ()=>{
        const data = await Transaction.findAll({})
        return data
    },
    //service for deleting transaction, first finding if the transaction exist then deleting it
    deleteTransactionService: async (id)=>{

        const transaction = await Transaction.findOne({where:{id}})
        if(!transaction){
            throw new ErrorObject("no transaction found", 404)
        }

        return await transaction.destroy()
    }
}
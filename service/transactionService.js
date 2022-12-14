const {Transaction} = require("../database/models")
const {ErrorObject} =   require("../helpers/error")

module.exports ={
    getTransactionsService: async ()=>{
        const data = await Transaction.findAll({})
        return data
    },
    updateTransactionService: async (id, data)=>{

       
        //checking if the transaction exist
        
        const transaction = await Transaction.findOne({where:{id}})

        if(!transaction){
            throw new ErrorObject("no transaction found", 404)
        }

            //create update here.

        // await transaction.update(data, {});       

    }
}
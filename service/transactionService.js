const {Transaction} = require("../database/models")
const {ErrorObject} =   require("../helpers/error")

module.exports = {

    deleteTransactionService: async (id)=>{

        const transaction = await Transaction.findOne({where:{id}})
        if(!transaction){
            throw new ErrorObject("no transaction found", 404)
        }

        return await transaction.destroy()
        

    }


}
const {Transaction} = require("../database/models")
const {ErrorObject} =   require("../helpers/error")

module.exports = {

    updateTransactionService: async (id, data)=>{

        const transaction = await Transaction.findOne({where:{id}})
        if(!transaction){
            throw new ErrorObject("no transaction found", 404)
        }

        //create update here.
        

    }


}
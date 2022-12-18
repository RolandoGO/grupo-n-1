const { Transaction } = require("../database/models")
const {ErrorObject} = require("../helpers/error")

module.exports ={
//get all transactions and paginate
    getTransactionsService: async (page, req)=>{

        let url =req.originalUrl
        url = url.slice(0, url.length - page.toString().length);
        const limit = 10;
        const offset = page ? page * 10 : 0 * 10;

        //checkin if querys are in the url for searching transactions for one user only
        const queryId = req.query.id? {userId:req.query.id } : {}

        
        const data = await Transaction.findAll({where:queryId,
            limit,
            offset
        });
        return {
            data,
            previousPage: page ? `${url}${Number(page) - 1}` : null,
            nextPage: data.length < 10 ? null:`${url}${Number(page) + 1}`
        };

    },

    //service for deleting transaction, first finding if the transaction exist then deleting it
    deleteTransactionService: async (id)=>{

        const transaction = await Transaction.findOne({where:{id}})
        
        if(!transaction){
            throw new ErrorObject("No Transaction was found with that id", 404)
        }
        return await transaction.destroy()
    },


    createTransactionService: async (data)=>{
        const response = await Transaction.create(data)    
        return response
},

    getTransactionService: async (id)=>{
        
        const data = await Transaction.findOne({
            where: { id }
        })

        if(!data){
            throw new ErrorObject("No Transaction was found with that id", 404)
        }
        return data
    },
    
    updateTransactionService: async (id, data)=>{

       
        //checking if the transaction exist
        
        const transaction = await Transaction.findOne({where:{id}})

        if(!transaction){
            throw new ErrorObject("no transaction found", 404)
        }

     //create update here.

        await Transaction.update(data, {where:{id}});       


    }
}
const { Category } = require("../database/models")
const {ErrorObject} = require("../helpers/error")




module.exports = {
    getCategoryService: async (id)=>{

        const response = await Category.findOne({where: { id }});
      
        if(!response){
        throw new ErrorObject("No category found with that id", 404)
        }

        return response
    },
    
     createCategoryService:async (data)=>{
        const response = await Category.create(data)
        return response

    },
    
    getCategoriesService: async ()=>{
        const data = await Category.findAll({})
        return data

    },

     updateCategoryService: async (id, data)=>{
        console.log(id, data)
        const category = await Category.findOne({ where:{ id } })
        if (!category){
            throw new ErrorObject("No category found with that id", 404)
        }

        await Category.update(data, { where: { id } })

    },  
}




   







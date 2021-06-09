const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req,res,next){
        try {
            const {name} = req.body
            console.log(name);
            const type = await Type.create({name})
            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }

    async getAll(req,res){
       try{
            const types = await Type.findAll()
            return res.json(types)           
       }catch(e){
        next(ApiError.badRequest(e))
       }
    }

    
}

module.exports = new TypeController()
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const {Tovar,Tovar_info} = require('../models/models')


class ProductController {
    async create(req,res,next){
        try{
            let {name,price,typeId,brandId,info} = req.body
            console.log(name,price,typeId,brandId,info);
            // const {img} = req.files 
            // let fileName = uuid.v4() + '.jpg'
            // img.mv(path.resolve(__dirname,'..','static',fileName))
            // const tovar = await Tovar.create({name,price,typeId,brandId,img:fileName})

            if(info){
                info = JSON.parse(info)
                console.log(info);
                info.forEach(e => {
                    Tovar_info.create({
                        title:e.title,
                        description:e.description,
                        tovarId:tovarId
                    })
                });
            }

            return res.json(tovar)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    


    async getAll(req,res){
        let {typeId,brandId,limit,page} = req.query
        console.log(typeId,brandId,limit,page);
        page = page ||1 
        limit = limit ||30
        let offset = page * limit - limit
        let tovar
        if(!typeId &&!brandId){
            tovar = await Tovar.findAll()
        } 
        if(typeId && !brandId){
            tovar = await Tovar.findAndCountAll({where:{typeId},limit,offset})
        } 
        if(!typeId && brandId){
            tovar = await Tovar.findAndCountAll({where:{brandId},limit,offset})
        } 
        if(typeId&&brandId){
            tovar = await Tovar.findAndCountAll({where:{typeId,brandId},limit,offset})
        }
        return res.json(tovar)
        
    }



    async getOne(req,res,next){
        try {
            console.log('qwd');
            const {id} = req.params
            const tovar = await Tovar.findOne({where:{id},include:[{model:Tovar_info,as:'info'}]})
            res.json(tovar)
        } catch (e) {
            
        }
    }

}

module.exports = new ProductController()
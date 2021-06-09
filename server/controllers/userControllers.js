const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {User,Bascet} = require('../models/models')

const generateJWT = (id,email,role) =>{
   return jwt.sign({id,email,role},process.env.SECRET_KEY,{expiresIn:'24h'})
}

class userController{

    async registration(req,res,next){
        try {
            const {email,password,role} = req.body
            if(!email || !password){
                return next(ApiError.badRequest('введите данные'))
            }
            const candidate = await User.findOne({where:{email}})

            if(candidate) {
                return next(ApiError.badRequest('пользователь существует'))
            }

            const hash = await bcrypt.hash(password,5)
            const user = await User.create({email,role,password:hash})
            const basket = await Bascet.create({userId:user.id})
            
            const token = generateJWT(user.id,email,user.role)
            res.json({token})
        } catch (e) {
            next(ApiError.badRequest('ошибка'))
        }
    }
    async login(req,res){
        try{
            const {email,password} = req.body
            const user = await User.findOne({where:{email}})
            if(!user){
                return next(ApiError.internal('пользователь не найден'))
            }
            let comparePass = bcrypt.compareSync(password,user.password)

            if(!comparePass) {
                return next(ApiError.internal('неверный пароль'))
            }

            const token = generateJWT(user.id,user.email,user.role)
            return res.json({token})

        }catch(e){
            next(ApiError.badRequest('ошибка'))
        }

    }
    async check(req,res){
        const token = generateJWT(req.user.id,req.user.email,req.user.role)
        return res.json({token})
    }


}


module.exports = new userController()
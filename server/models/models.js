const  sequelize =require('../db')
const {DataTypes} =  require('sequelize')


const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING,unique:true},
    role:{type:DataTypes.STRING,defaultValue:"USER"}
})
const Bascet = sequelize.define('bascet',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    
})
const Bascet_device = sequelize.define('Bascet_device',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

const Tovar = sequelize.define('tovar',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    img:{type:DataTypes.STRING,allowNull:false},
})


const Type = sequelize.define('type',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false}
})
const Brand = sequelize.define('brand',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false}
})
const Tovar_info = sequelize.define('tovar_info',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false},
    description:{type:DataTypes.STRING,allowNull:false}
})


const TypeBrand = sequelize.define('type_brand',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

User.hasOne(Bascet)
Bascet.belongsTo(User)


Bascet.hasMany(Bascet_device)
Bascet_device.belongsTo(Bascet)

Type.hasMany(Tovar)
Tovar.belongsTo(Type)

// Brand.hasMany(Tovar)
// Tovar.belongsTo(Brand)

Tovar.hasMany(Bascet_device)
Bascet_device.belongsTo(Tovar)

Tovar.hasMany(Tovar_info,{as:'info'})
Tovar_info.belongsTo(Tovar)


Type.belongsToMany(Brand,{through:TypeBrand})
Brand.belongsToMany(Type,{through:TypeBrand})


module.exports = {
    Bascet,User,TypeBrand,Brand,Tovar,Tovar_info,Bascet_device,Type
}
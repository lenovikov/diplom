const express = require('express');
const router = express.Router();


const product = require('./productRouter')
const users = require('./usersRouter')
const type = require('./typeRouter')

router.use('/product',product)
router.use('/users',users)
router.use('/type',type)

module.exports = router
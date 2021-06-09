const Router = require('express')
const router = new Router()
const userController = require('../controllers/userControllers')
const authMiddlewear = require('../middlewear/authMiddlewear')


router.post('/login',userController.login)
router.post('/registration',userController.registration)
router.get('/auth',authMiddlewear, userController.check)



module.exports = router


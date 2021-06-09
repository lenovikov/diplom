const Router = require('express')
const router  = new Router()
const ProductController = require('../controllers/productController')

router.post('/create',ProductController.create)
router.get('/show/:id',ProductController.getOne)
router.get('/show',ProductController.getAll)


module.exports = router
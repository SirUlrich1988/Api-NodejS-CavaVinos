const router = require('express').Router()

const productsServices = require('./products.services')

router.get('/', productsServices.showAllProducts)
router.post('/', productsServices.addProduct)

router.get('/:id', productsServices.searchProductById)
router.patch('/:id', productsServices.patchProduct)
router.put('/:id', productsServices.putProduct)
router.delete('/:id', productsServices.destroyProduct)

module.exports = router
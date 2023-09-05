const express = require('express');
const { getAllProducts, createProduct, deleteSpecificProduct, updateProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/getAllProducts',getAllProducts);
router.post('/createProduct',createProduct);
router.put('/updateProduct/:id',updateProduct);
router.delete('/deleteSpecificProduct',deleteSpecificProduct);

module.exports = router;
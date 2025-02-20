const express = require('express');
const { addProduct, getProducts } = require('../controllers/product.controller');
const upload = require('../middleware/upload.middleware');

const router = express.Router();

router.post('/add', upload.single('image'), addProduct);  // ✅ Add product with image
router.get('/list', getProducts);  // ✅ Get all products

module.exports = router;

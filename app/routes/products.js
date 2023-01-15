const express = require("express");
const router = express.Router();
const controller = require("../controller/products.js")
const {
    verifyToken,
    verifyAdmin,
    verifyUser
} = require("../utils/Verification.js");

router.get('/get-all-products', controller.getAllProducts)

router.get('/find/:id', controller.getProductById)

router.post('/add',verifyAdmin, controller.createProduct)

router.put('/update',verifyAdmin, controller.updateProduct)

router.delete('/:id',verifyAdmin, controller.deleteProduct)

module.exports = router

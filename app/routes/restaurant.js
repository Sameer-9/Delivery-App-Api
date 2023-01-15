const express = require("express");
const router = express.Router();
const controller = require("../controller/restaurant")
const {
    verifyToken,
    verifyAdmin,
    verifyUser
} = require("../utils/Verification.js");

router.get('/get-all-restaurants', controller.getAllRestaurant)

router.get('/get-restaurant-dishes/:id', controller.getRestaurantDishes)

router.get('/get-featured-restaurants', controller.getFeaturedRestaurants)

router.get('/get-categories', controller.getCategories)

router.get('/find', controller.getRestaurantById)

router.post('/add',verifyAdmin, controller.createProduct)

router.put('/update',verifyAdmin, controller.updateProduct)

router.delete('/:id',verifyAdmin, controller.deleteProduct)

module.exports = router

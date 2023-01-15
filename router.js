const express = require("express");

function setRouter(app) {
    const authRoute = require("./app/routes/auth.js")
    const productRoute = require("./app/routes/products.js")
    const userRouter = require("./app/routes/user.js")
    const RestaurantRouter = require("./app/routes/restaurant")
    app.use('/api/auth', authRoute)
    app.use('/api/user', userRouter)
    app.use('/api/product', productRoute)
    app.use('/api/restaurant', RestaurantRouter)

}

module.exports = setRouter  
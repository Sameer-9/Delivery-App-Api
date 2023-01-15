const {client} = require("../config/db.js")
const restaurant = require("../model/Restaurant")

module.exports = {

    getAllRestaurant: async (req, res) => {
       await Promise.all([restaurant.getAllRestaurants()]).then(result => {
            res.json({
                restaurants: result[0].rows
            })
        }).catch(error => {
            res.status(500).send({"error": error})
        })
    },

    getRestaurantById: async (req, res) => {
       await Promise.all([restaurant.getRestaurantById(req.body.id)]).then(result => {
            res.json({
                products: result[0].rows
            })
        }).catch(error => {
            res.status(500).send({"error": error})
        })
    },

    getRestaurantDishes: async (req, res) => {
       await Promise.all([restaurant.getRestaurantDishes(req.params.id)]).then(result => {
            res.json({
                products: result[0].rows
            })
        }).catch(error => {
            res.status(500).send({"error": error})
        })
    },

    getFeaturedRestaurants: async (req, res) => {
       await Promise.all([restaurant.getFeaturedRestaurants()]).then(result => {
            res.json({
                products: result[0].rows
            })
        }).catch(error => {
            res.status(500).send({"error": error})
        })
    },
    
    getCategories: async (req, res) => {
       await Promise.all([restaurant.getCategories()]).then(result => {
            res.json({
                products: result[0].rows
            })
        }).catch(error => {
            res.status(500).send({"error": error})
        })
    },

    createProduct: async (req, res) => {
        await Promise.all([Products.insertProducts(req.body)]).then(result => {
            res.json({
                rowsAffected: result[0].rowCount
            })
        }).catch(error => {
            res.status(400).send({"error": error})
        })
    },

    updateProduct: async (req, res) => {
        console.log("DATA>>>>>", req.body)
        await Promise.all([Products.updateProducts(req.body)]).then(result => {
            res.json({
                rowsAffected: result[0].rowCount
            })
        }).catch(error => {
            res.status(400).send({"error": error})
        })
    },

    deleteProduct: async (req, res) => {
        await Promise.all([Products.deleteProducts(req.params.id)]).then(result => {
            res.json({
                rowsAffected: result[0].rowCount
            })
        }).catch(error => {
            res.status(400).send({"error": error})
        })
    }
}
const {client} = require("../config/db.js")
const Products = require("../model/Products.js")

module.exports = {

    getAllProducts: async (req, res) => {
       await Promise.all([Products.getAllProducts()]).then(result => {
            res.json({
                products: result[0].rows
            })
        }).catch(error => {
            res.status(400).send({"error": error})
        })
    },

    getProductById: async (req, res) => {
       await Promise.all([Products.getProductsById(req.params.id)]).then(result => {
            res.json({
                products: result[0].rows
            })
        }).catch(error => {
            res.status(400).send({"error": error})
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
const {
    client
} = require("../config/db.js")


module.exports = class Products {

    static getAllProducts() {
       return client.query('SELECT * FROM products')
    }

    static getProductsById(id) {

       return client.query('SELECT * FROM products WHERE id=$1',[id]);
        
    }

    static getProductsByCategory() {

    }

    static insertProducts(products) {

        return client.query(`INSERT INTO products(name,description,type_lid) VALUES($1,$2,$3)`,[products.name,products.description,products.type_lid])
    }

    static updateProducts(product) {

        return client.query(`UPDATE products SET name=$1, description=$2, type_lid=$3 WHERE id=$4`,[product.name,product.description,product.type_lid,product.id])

    }

    static deleteProducts(id) {

        return client.query(`DELETE FROM products WHERE id=$1`,[id])
    }
}
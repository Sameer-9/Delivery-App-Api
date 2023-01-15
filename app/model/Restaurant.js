const {
    client
} = require("../config/db.js")


module.exports = class Restaurant {

    static getAllRestaurants() {
       return client.query('SELECT * FROM restaurant')
    }

    static getRestaurantById(id) {

       return client.query('SELECT * FROM restaurant WHERE id=$1',[id]);
        
    }

    static getRestaurantDishes(id) {

       return client.query(`SELECT * FROM   restaurant r
       JOIN  (
          SELECT rd.restaurant_lid as id,to_jsonb(array_agg(d.*)) AS dishes_array
          FROM   dish d
          JOIN   restaurant_dishes rd ON rd.dish_lid = d.id
          GROUP  BY rd.restaurant_lid
          ) t USING (id) WHERE id=$1;`,[id]);

    }

    static getFeaturedRestaurants() {

       return client.query(`SELECT * FROM   featured f
       JOIN  (
          SELECT fr.featured_lid as id,to_jsonb(array_agg(r.*)) AS featured_restaurant_array
          FROM   restaurant r
          JOIN   featured_restaurants fr ON fr.restaurant_lid = r.id
          GROUP  BY fr.featured_lid
          ) t USING (id);`);

    }

    static getCategories() {

       return client.query(`SELECT * FROM category ORDER BY id;`);

    }

    static getProductsByCategory() {

    }

    static insertProducts(products) {

        // return client.query(`INSERT INTO restaurant(name,description,type_lid) VALUES($1,$2,$3)`,[products.name,products.description,products.type_lid])
    }

    static updateProducts(product) {

        // return client.query(`UPDATE products SET name=$1, description=$2, type_lid=$3 WHERE id=$4`,[product.name,product.description,product.type_lid,product.id])

    }

    static deleteProducts(id) {

        return client.query(`DELETE FROM restaurant WHERE id=$1`,[id])
    }
}
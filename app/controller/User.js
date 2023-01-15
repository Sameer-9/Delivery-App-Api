const {client} = require("../config/db.js")
const User = require("../model/User.js");

module.exports = {
    getAllUser: async (req, res) => {
        await Promise.all([User.getAllUsers()]).then(result => {
             res.json({
                 User: result[0].rows
             })
         }).catch(error => {
             res.status(400).send({"error": error})
         })
     },
 
     getUserById: async (req, res) => {
        await Promise.all([User.GetUserByID(req.params.id)]).then(result => {
             res.json({
                 User: result[0].rows
             })
         }).catch(error => {
             res.status(400).send({"error": error})
         })
     },

     getUserByUserName: async (req, res) => {
        await Promise.all([User.GetUserByUserName(req.params.username)]).then(result => {
             res.json({
                 User: result[0].rows
             })
         }).catch(error => {
             res.status(400).send({"error": error})
         })
     },
 
     createUser: async (req, res) => {
         console.log("DATA>>>>>", req.body)
         await Promise.all([User.insertUser(req.body)]).then(result => {
             res.json({
                 rowsAffected: result[0].rowCount
             })
         }).catch(error => {
             res.status(400).send({"error": error})
         })
     },
 
     updateUser: async (req, res) => {
         console.log("DATA>>>>>", req.body)
         await Promise.all([User.updateUser(req.body)]).then(result => {
             res.json({
                 rowsAffected: result[0].rowCount
             })
         }).catch(error => {
             res.status(400).send({"error": error})
         })
     },
 
     deleteUser: async (req, res) => {
         console.log("DATA>>>>>", req.body)
         await Promise.all([User.deleteUser(req.body)]).then(result => {
             res.json({
                 rowsAffected: result[0].rowCount
             })
         }).catch(error => {
             res.status(400).send({"error": error})
         })
     }
}
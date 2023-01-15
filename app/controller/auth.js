const {
    client
} = require("../config/db.js");
const User = require("../model/User.js")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config()

module.exports = {
    register: async (req, res) => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)
        req.body.password_hash = hash;
        await Promise.all([User.insertUser(req.body)]).then(result => {
            res.json({
                products: result[0].rows,
                status: "Success"
            })
        }).catch(error => {
            res.status(400).send({
                "error": error
            })
        })
    },

    login: async (req, res) => {

        const user = (await User.GetUserByUserName(req.body.username)).rows;
        if (!user || user.length !== 1) return res.status(404).send("Not Found");

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user[0].password_hash);

        if (!isPasswordCorrect) return res.status(400).send("Password Incorrect")
        const token = jwt.sign({
            username: user[0].username,
            isAdmin: user[0].is_admin
        }, process.env.JWT_SECRET);

        const {
            password_hash,
            is_admin,
            ...otherDetails
        } = user[0];
        return res.status(200).cookie("access_token", token, {
            httpOnly: true
        }).json(otherDetails);
    }
}
const express = require("express");
const app = express();
require("dotenv").config()
const cookieParser = require("cookie-parser");
const {
    client
} = require("./app/config/db.js")
const setRouter = require("./router.js")

client.connect();
app.use(cookieParser())
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.listen(8080, () => {
    console.log("Server Started....")
})
setRouter(app)
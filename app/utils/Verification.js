const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    if (!req.cookies) return res.status(401).send("UnAuthorized")

    const token = req.cookies.access_token;

    if (!token) return res.status(401).send("UnAuthorized");

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) return res.status(403).send("Invalid Token");

        req.userData = data;
        next();
    })
}

const verifyUser = (req, res, next) => {

    verifyToken(req, res, () => {

        if (req.userData.id === req.params.id || req.userData.isAdmin) {
            next();
        } else {
            return res.status(400).send("NOt Authorized")
        }
    })
}

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {

        if (req.userData.isAdmin) {
            next();
        } else {
            return res.status(400).send("NOt Authorized")
        }
    })
}

module.exports = {
    verifyToken,
    verifyAdmin,
    verifyUser
};
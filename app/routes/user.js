const express = require("express");
const router = express.Router();
const {
    client
} = require("../config/db.js");
const user = require("../controller/User.js");
const {
    verifyUser,
    verifyAdmin
} = require("../utils/Verification.js");

router.get('/', verifyAdmin, user.getAllUser)
router.put('/update', verifyUser, user.updateUser)
router.get('/find/:id', verifyUser, user.getUserById)
router.delete('/:id', verifyUser, user.deleteUser)

module.exports = router
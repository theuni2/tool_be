const express = require("express");
const router = express.Router();
const {login} = require("../controllers/userController");

router.post("/login",login);
// router.get("logout",logout);



module.exports = router;
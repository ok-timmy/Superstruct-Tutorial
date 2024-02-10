const router = require("express").Router();
const { createUser, loginUser } = require("../Controller/AuthController")

//REGISTER
router.post("/register", createUser);

//LOGIN
router.post("/login", loginUser);

module.exports = router;
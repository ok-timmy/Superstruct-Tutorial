const router = require("express").Router();
const { createPost } = require("../Controller/PostController")

//REGISTER
router.post("/create", createPost);

module.exports = router;
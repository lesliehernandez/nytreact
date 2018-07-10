const router = require("express").Router();
const articles = require("./articles");

// article routes
router.use("/articles", articles);

module.exports = router;

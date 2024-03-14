const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));
const breedController = require("../controllers/breed_controller");

router.get("/", breedController.index);

module.exports = router;

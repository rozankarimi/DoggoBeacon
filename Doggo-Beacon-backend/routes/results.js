const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));
const factController = require("../controllers/fact_controller");

router.get("/", factController.index);

module.exports = router;

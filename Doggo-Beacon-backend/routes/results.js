const router = require("express").Router();
const factController = require("../controllers/fact_controller");

router.get("/", factController.index);

module.exports = router;

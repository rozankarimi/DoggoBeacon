const router = require("express").Router();
const compareController = require("../controllers/comparison_controller");

// Route to handle matching logic
router.post("/", compareController.matchCriteria);

module.exports = router;

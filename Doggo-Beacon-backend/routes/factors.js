const router = require("express").Router();
const breedController = require("../controllers/breed_controller");

router.get("/", breedController.index);
router.get("/:id", breedController.show);

module.exports = router;

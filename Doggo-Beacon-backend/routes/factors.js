const router = require("express").Router();
const breedController = require("../controllers/breed_controller");

router.get("/", breedController.index);
router.get("/", breedController.show);
// router.get("/", breedController.getDataFromDatabase);
// router.get("/:id", breedController.getSingleRecord);

module.exports = router;

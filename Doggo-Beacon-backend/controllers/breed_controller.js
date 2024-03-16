const Breed = require("../models/breed");

async function index(req, res) {
  try {
    const breeds = await Breed.all();
    res.status(200).json(breeds);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function show(req, res) {
  try {
    const breeds = await Breed.find(req.params.id);
    res.json(breeds);
  } catch (error) {
    res.json({ error: error.message });
  }
}

module.exports = {
  index,
  show,
};

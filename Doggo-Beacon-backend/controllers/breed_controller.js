const Breed = require("../models/breed");

async function index(req, res) {
  try {
    const posts = await Breed.all();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  index,
};

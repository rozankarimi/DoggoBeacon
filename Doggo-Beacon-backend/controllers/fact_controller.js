const Fact = require("../models/fact");

async function index(req, res) {
  try {
    const facts = await Fact.all();
    res.status(200).json(facts);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  index,
};

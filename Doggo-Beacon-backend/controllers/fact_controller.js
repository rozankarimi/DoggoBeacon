const Fact = require("../models/fact");

async function index(req, res) {
  try {
    const facts = await Fact.all();
    res.status(200).json(facts);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
async function show(req, res) {
  try {
    const breeds = await Fact.find(req.params.id);
    res.json(breeds);
  } catch (error) {
    res.json({ error: error.message });
  }
}

module.exports = {
  index,
  show,
};

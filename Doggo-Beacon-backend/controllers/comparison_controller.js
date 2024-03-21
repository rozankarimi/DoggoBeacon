// const compare = require("../models/compare");
const router = require("../routes/comparison");
const knex = require("knex")(require("../knexfile").development);

// Controller action to handle matching logic
const matchCriteria = async (req, res) => {
  try {
    // Get user input data from the request body
    const userInput = req.body;
    console.log(userInput);
    // Fetch predefined criteria from the database
    const criteria = await knex("dog_breed").select("*");

    const matchedCategories = [];

    // Iterate over each condition
    conditions.forEach(async (condition) => {
      // Check if user selected "Apartment" or "House" and filter based on height criteria
      if (
        userInput.Category === "APARTMENT" &&
        condition.height > 0 &&
        condition.height < 20
      ) {
        matchedCategories.push(condition.category);
      } else if (userInput.Category === "HOUSE" && condition.height >= 20) {
        matchedCategories.push(condition.category);
      }

      // Check if user selected "Indoor" or "Short walk" or "long walk" and filter based on playfulness level
      if (
        userInput.PlayActivity === "ONLY INDOOR PLAY" &&
        condition.playfulness === 3
      ) {
        matchedCategories.push(condition.category);
      } else if (
        userInput.PlayActivity === "SHORT WALK" &&
        condition.playfulness === 4
      ) {
        matchedCategories.push(condition.category);
      } else if (
        userInput.PlayActivity === "OCCASIONAL LONG WALK" &&
        condition.playfulness === 5
      ) {
        matchedCategories.push(condition.category);
      }

      // Check if user selected "less than hour" or "4 Hours" or "8 Hours" and filter based on Energy level

      if (userInput.EnergyLevel === "< 1 HOUR" && condition.energy === 3) {
        matchedCategories.push(condition.category);
      } else if (
        userInput.EnergyLevel === "4 HOURS" &&
        condition.energy === 4
      ) {
        matchedCategories.push(condition.category);
      } else if (
        userInput.EnergyLevel === "> 8 HOURS" &&
        condition.energy === 5
      ) {
        matchedCategories.push(condition.category);
      }

      // Check user input for shedding
      if (
        userInput.Shedding === "YES" &&
        [5, 4, 3, 2].includes(condition.shedding)
      ) {
        matchedCategories.push(condition.category);
      } else if (userInput.Shedding === "NO" && condition.shedding === 1) {
        matchedCategories.push(condition.category);
      }
      // Check user input for trainability
      if (userInput.Trainability === "NONE" && condition.trainability <= 3) {
        matchedCategories.push(condition.category);
      } else if (
        userInput.Trainability === "BASIC" &&
        condition.trainability === 4
      ) {
        matchedCategories.push(condition.category);
      } else if (
        userInput.Trainability === "ADVANCED" &&
        condition.trainability === 5
      ) {
        matchedCategories.push(condition.category);
      }
      // Check user input for grooming
      if (userInput.Grooming === "DAILY" && condition.grooming === 4) {
        matchedCategories.push(condition.category);
      } else if (userInput.Grooming === "WEEKLY" && condition.grooming === 3) {
        matchedCategories.push(condition.category);
      } else if (
        userInput.Grooming === "OCCASIONALLY" &&
        [1, 2].includes(condition.grooming)
      ) {
        matchedCategories.push(condition.category);
      }
      // Check user input for weight
      if (
        userInput.Weight === "20 LBS OR UNDER" &&
        condition.weight >= 0 &&
        condition.weight <= 20
      ) {
        matchedCategories.push(condition.category);
      } else if (
        userInput.Weight === "20-50 LBS" &&
        condition.weight > 20 &&
        condition.weight <= 50
      ) {
        matchedCategories.push(condition.category);
      } else if (
        userInput.Weight === "50 LBS OR MORE" &&
        condition.weight > 50
      ) {
        matchedCategories.push(condition.category);
      }

      // Check user input for barking
      if (userInput.Barking === "NONE" && condition.barking === 1) {
        matchedCategories.push(condition.category);
      } else if (
        userInput.Barking === "SOME BARKING IS OK" &&
        [2, 3].includes(condition.barking)
      ) {
        matchedCategories.push(condition.category);
      } else if (
        userInput.Barking === "BARKING IS NOT AN ISSUE" &&
        condition.barking === 5
      ) {
        matchedCategories.push(condition.category);
      }
    });

    // Remove duplicate categories from matchedCategories if needed
    const uniqueMatchedCategories = [...new Set(matchedCategories)];

    // Send back the matched categories as the response
    res.json({ matchedCategories });
  } catch (error) {
    console.error("Error matching criteria:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { matchCriteria };

// const compare = require("../models/compare");
const router = require("../routes/comparison");
const knex = require("knex")(require("../knexfile").development);

// Controller action to handle matching logic
const matchCriteria = async (req, res) => {
  try {
    // Get user input data from the request body
    const userInput = req.body;
    console.log(userInput);
    const matchedCategories = [];

    // Query the database with Knex
    const criteria = await knex("dog_breed")
      .select("*")
      .where((builder) => {
        // Filter based on user input
        if (userInput.Category === "APARTMENT") {
          builder.whereBetween("height", [0, 20]);
        } else if (userInput.Category === "HOUSE") {
          builder.where("height", ">=", 20);
        }

        if (userInput.PlayActivity === "ONLY INDOOR PLAY") {
          builder.where("playfulness", 3);
        } else if (userInput.PlayActivity === "SHORT WALK") {
          builder.where("playfulness", 4);
        } else if (userInput.PlayActivity === "OCCASIONAL LONG WALK") {
          builder.where("playfulness", 5);
        }

        if (userInput.AloneTime === "< 1 HOUR") {
          builder.where("energy", 3);
        } else if (userInput.AloneTime === "4 HOURS") {
          builder.where("energy", 4);
        } else if (userInput.AloneTime === " > 8 HOURS") {
          builder.where("energy", 5);
        }

        if (userInput.Shedding === "yes") {
          builder.whereIn("shedding", [5, 4, 3, 2]);
        } else {
          builder.where("shedding", 1);
        }

        if (userInput.Trainability === "NONE") {
          builder.where("trainability", "<=", 3);
        } else if (userInput.Trainability === "BASIC") {
          builder.where("trainability", 4);
        } else if (userInput.Trainability === "ADVANCED") {
          builder.where("trainability", 5);
        }

        if (userInput.Grooming === "DAILY") {
          builder.where("grooming", 4);
        } else if (userInput.Grooming === "WEEKLY") {
          builder.where("grooming", 3);
        } else if (userInput.Grooming === "OCCASIONALLY") {
          builder.whereIn("grooming", [1, 2]);
        }

        if (userInput.Weight === "20 LBS OR UNDER") {
          builder.whereBetween("weight", [0, 20]);
        } else if (userInput.Weight === "20-50 LBS") {
          builder.whereBetween("weight", [20, 50]);
        } else if (userInput.Weight === "50 LBS OR MORE") {
          builder.where("weight", ">", 50);
        }

        if (userInput.Barking === "NONE") {
          builder.where("barking", 1);
        } else if (userInput.Barking === "SOME BARKING IS OK") {
          builder.whereIn("barking", [2, 3]);
        } else if (userInput.Barking === "BARKING IS NOT AN ISSUE") {
          builder.where("barking", 5);
        }
      });

    // Extract matched categories from the result
    criteria.forEach((row) => matchedCategories.push(row.category));

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

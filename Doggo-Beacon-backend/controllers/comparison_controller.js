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
        if (userInput.answers === "APARTMENT") {
          console.log("Applying category filter: APARTMENT");
          builder.whereBetween("height", [0, 20]);
        } else if (userInput.answers === "HOUSE") {
          console.log("Applying category filter: HOUSE");
          builder.where("height", ">=", 20);
        }

        if (userInput.answers === "ONLY INDOOR PLAY") {
          console.log(
            "make sure this is called when the user clicks only indoor play"
          );
          builder.andWhere("playfulness", 3);
        } else if (userInput.answers === "SHORT WALK") {
          console.log("Applying category filter: SHORT WALK");
          builder.andWhere("playfulness", 4);
        } else if (userInput.answers === "OCCASIONAL LONG WALK") {
          console.log("Applying category filter: Occasional long walk");
          builder.andWhere("playfulness", 5);
        }

        if (userInput.answers === "< 1 HOUR") {
          console.log("Applying category filter: 1 hour");
          builder.andWhere("energy", 3);
        } else if (userInput.answers === "4 HOURS") {
          console.log("Applying category filter: 4 hours");
          builder.andWhere("energy", 4);
        } else if (userInput.answers === " > 8 HOURS") {
          console.log("Applying category filter: 8 hours");
          builder.andWhere("energy", 5);
        }

        if (userInput.answers === "yes") {
          builder.andWhereIn("shedding", [5, 4, 3, 2]);
          console.log("Applying category filter: yes");
        } else {
          console.log("Applying category filter: no sheeed");
          builder.andWhere("shedding", 1);
        }

        if (userInput.answers === "NONE") {
          console.log("Applying category filter: NONE");
          builder.andWhere("trainability", "<=", 3);
        } else if (userInput.answers === "BASIC") {
          console.log("Applying category filter: BASIC");
          builder.andWhere("trainability", 4);
        } else if (userInput.answers === "ADVANCED") {
          console.log("Applying category filter: ADVANCED");
          builder.andWhere("trainability", 5);
        }

        if (userInput.answers === "DAILY") {
          console.log("Applying category filter: DAILY");
          builder.andWhere("grooming", 4);
        } else if (userInput.answers === "WEEKLY") {
          console.log("Applying category filter: WEEKLY");
          builder.andWhere("grooming", 3);
        } else if (userInput.answers === "OCCASIONALLY") {
          console.log("Applying category filter: OCCASIONALLY");
          builder.andWhereIn("grooming", [1, 2]);
        }

        if (userInput.answers === "20 LBS OR UNDER") {
          console.log("Applying category filter:  < 20");
          builder.whereBetween("weight", [0, 20]);
        } else if (userInput.answers === "20-50 LBS") {
          console.log("Applying category filter: 20-50");
          builder.whereBetween("weight", [20, 50]);
        } else if (userInput.answers === "50 LBS OR MORE") {
          console.log("Applying category filter: > 50");
          builder.where("weight", ">", 50);
        }

        if (userInput.answers === "NONE") {
          console.log("Applying category filter: NONE");
          builder.andWhere("barking", 1);
        } else if (userInput.answers === "SOME BARKING IS OK") {
          console.log("Applying category filter: Some is ok");
          builder.andWhereIn("barking", [2, 3]);
        } else if (userInput.answers === "BARKING IS NOT AN ISSUE") {
          console.log("Applying category filter: Not an issue");
          builder.andWhere("barking", 5);
        }
      });

    // Extract matched categories from the result
    criteria.forEach((row) => {
      matchedCategories.push({ name: row.name, image: row.image_link });
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

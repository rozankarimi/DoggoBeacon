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
    conditions.forEach((condition) => {
      // Check if user selected "Apartment" or "House"
      if (userInput.Category === "APARTMENT") {
        // If user selected "Apartment", apply height criteria 0 < Height < 20
        if (userInput.height > 0 && userInput.height < 20) {
          // need to change to knex filter
          matchedCategories.push(condition.category);
        }
      } else if (userInput.Category === "HOUSE") {
        // If user selected "House", apply height criteria Height >= 20
        if (userInput.height >= 20) {
          matchedCategories.push(condition.category);
        }
      }
      // Check if user selected "Indoor" or "Short walk" or "long walk"
      if (userInput.PlayActivity === "ONLY INDOOR PLAY") {
        // If user selected "Indoor", assign playfulness level of 3
        if (condition.playfulness === 3) {
          matchedCategories.push(condition.category);
        }
      } else if (userInput.PlayActivity === "SHORT WALK") {
        // If user selected "Short Walk", assign playfulness level of 4
        if (condition.playfulness === 4) {
          matchedCategories.push(condition.category);
        }
      } else if (userInput.PlayActivity === "OCCASIONAL LONG WALK") {
        // If user selected "Long Walk", assign playfulness level of 5
        if (condition.playfulness === 5) {
          matchedCategories.push(condition.category);
        }
      }
      // Check if user selected "< 1 HOUR", "4 HOURS", or " > 8 HOURS"

      if (userInput.AloneTime === "< 1 HOUR") {
        // If user selected "< 1 HOUR", assign energy level of 3
        if (condition.energy === 3) {
          matchedCategories.push(condition.category);
        }
      } else if (userInput.AloneTime === "4 HOURS") {
        // If user selected "4 HOURS", assign energy level of 4
        if (condition.energy === 4) {
          matchedCategories.push(condition.category);
        }
      } else if (userInput.AloneTime === " > 8 HOURS") {
        // If user selected " > 8 HOURS", assign energy level of 5
        if (condition.energy === 5) {
          matchedCategories.push(condition.category);
        }
      }
      // Check if user selected "yes" or "no" for shedding
      if (userInput.Shedding === "yes") {
        // If user selected "yes", assign shedding factors of 5, 4, 3, 2
        [5, 4, 3, 2].forEach((factor) => {
          conditions.forEach((condition) => {
            if (condition.shedding === factor) {
              matchedCategories.push(condition.category);
            }
          });
        });
      } else {
        // If user selected "no", assign shedding factor of 1
        conditions.forEach((condition) => {
          if (condition.shedding === 1) {
            matchedCategories.push(condition.category);
          }
        });
      }
      // Check user input for trainability
      if (userInput.Trainability === "NONE") {
        // If user input is "none", assign trainability factor of 3 or less
        conditions.forEach((condition) => {
          if (condition.trainability <= 3) {
            matchedCategories.push(condition.category);
          }
        });
      } else if (userInput.Trainability === "BASIC") {
        // If user input is "basic", assign trainability factor of 4
        conditions.forEach((condition) => {
          if (condition.trainability === 4) {
            matchedCategories.push(condition.category);
          }
        });
      } else if (userInput.Trainability === "ADVANCED") {
        // If user input is "advanced", assign trainability factor of 5
        conditions.forEach((condition) => {
          if (condition.trainability === 5) {
            matchedCategories.push(condition.category);
          }
        });
      }
      // Check user input for grooming
      if (userInput.Grooming === "DAILY") {
        // If user input is "daily", assign grooming factor of 4
        conditions.forEach((condition) => {
          if (condition.grooming === 4) {
            matchedCategories.push(condition.category);
          }
        });
      } else if (userInput.Grooming === "WEEKLY") {
        // If user input is "weekly", assign grooming factor of 3
        conditions.forEach((condition) => {
          if (condition.grooming === 3) {
            matchedCategories.push(condition.category);
          }
        });
      } else if (userInput.Grooming === "OCCASIONALLY") {
        // If user input is "occasionally", assign grooming factor of 1 or 2
        [1, 2].forEach((factor) => {
          conditions.forEach((condition) => {
            if (condition.grooming === factor) {
              matchedCategories.push(condition.category);
            }
          });
        });
      }
      // Check user input for weight
      if (userInput.Weight === "20 LBS OR UNDER") {
        // If user input is "20 LBS OR UNDER", assign weights between 0 and 20
        conditions.forEach((condition) => {
          if (condition.weight >= 0 && condition.weight <= 20) {
            matchedCategories.push(condition.category);
          }
        });
      } else if (userInput.Weight === "20-50 LBS") {
        // If user input is "20-50 LBS", assign weights between 20 and 50
        conditions.forEach((condition) => {
          if (condition.weight > 20 && condition.weight <= 50) {
            matchedCategories.push(condition.category);
          }
        });
      } else if (userInput.Weight === "50 LBS OR MORE") {
        // If user input is "50 LBS OR MORE", assign weights over 50 lbs
        conditions.forEach((condition) => {
          if (condition.weight > 50) {
            matchedCategories.push(condition.category);
          }
        });
      }
      // Check user input for barking
      if (userInput.Barking === "NONE") {
        // If user input is "NONE", assign factor of 1
        conditions.forEach((condition) => {
          if (condition.barking === 1) {
            matchedCategories.push(condition.category);
          }
        });
      } else if (userInput.Barking === "SOME BARKING IS OK") {
        // If user input is "SOME BARKING IS OK", assign factors of 2 and 3
        [2, 3].forEach((factor) => {
          conditions.forEach((condition) => {
            if (condition.barking === factor) {
              matchedCategories.push(condition.category);
            }
          });
        });
      } else if (userInput.Barking === "BARKING IS NOT AN ISSUE") {
        // If user input is "BARKING IS NOT AN ISSUE", assign factor of 5
        conditions.forEach((condition) => {
          if (condition.barking === 5) {
            matchedCategories.push(condition.category);
          }
        });
      }
    });

    // Send back the matched categories as the response
    res.json({ matchedCategories });
  } catch (error) {
    console.error("Error matching criteria:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { matchCriteria };

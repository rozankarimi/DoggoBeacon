// const compare = require("../models/compare");
const router = require("../routes/comparison");
const knex = require("knex")(require("../knexfile").development);

const matchedCategories = [];

// Controller action to handle matching logic
const matchCriteria = async (req, res) => {
  try {
    // Get user input data from the request body
    const userInput = req.body;
    console.log(userInput);
    matchedCategories.length = 0;

    // Query the database with Knex
    let heightFac;
    if (userInput.height === "APARTMENT") {
      console.log("Applying category filter: APARTMENT");
      heightFac = await knex
        .select("*")
        .from("dog_breed")
        .whereBetween("height", [0, 20]);
    } else if (userInput.height === "HOUSE") {
      console.log("Applying category filter: HOUSE");
      heightFac = await knex
        .select("*")
        .from("dog_breed")
        .where("height", ">=", 20);
    }
    let playFac;
    if (userInput.playfulness === "ONLY INDOOR PLAY") {
      console.log("Applying category filter: only indoor play");
      playFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("playfulness", 3);
      let filteredArray = heightFac.filter(function (array_el) {
        return (
          playFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    } else if (userInput.playfulness === "SHORT WALK") {
      console.log("Applying category filter: SHORT WALK");
      playFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("playfulness", 4);
      let filteredArray = heightFac.filter(function (array_el) {
        return (
          playFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    } else if (userInput.playfulness === "OCCASIONAL LONG WALK") {
      console.log("Applying category filter: Occasional long walk");
      playFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("playfulness", 5);
      let filteredArray = heightFac.filter(function (array_el) {
        return (
          playFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    }
    let energyFac;
    if (userInput.energy === " < 1 HOUR") {
      console.log("Applying category filter: 1 hour");
      energyFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("energy", 3);
      let filteredArray2 = playFac.filter(function (array_el) {
        return (
          energyFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    } else if (userInput.energy === "4 HOURS") {
      console.log("Applying category filter: 4 hours");
      energyFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("energy", 4);
      let filteredArray2 = playFac.filter(function (array_el) {
        return (
          energyFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    } else if (userInput.energy === " > 8 HOURS") {
      console.log("Applying category filter: 8 hours");
      energyFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("energy", 5);
      let filteredArray2 = playFac.filter(function (array_el) {
        return (
          energyFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    }

    let shedFac;
    if (userInput.shedding === "YES") {
      shedFac = await knex
        .select("*")
        .from("dog_breed")
        .whereIn("shedding", [5, 4, 3, 2]);
      let filteredArray3 = energyFac.filter(function (array_el) {
        return (
          shedFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
      console.log("Applying category filter: yes");
    } else if (userInput.shedding === "NO") {
      console.log("Applying category filter: no sheeed");
      shedFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("shedding", 1);
      let filteredArray3 = energyFac.filter(function (array_el) {
        return (
          shedFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    }

    let trainFac;
    if (userInput.training === "NONE") {
      console.log("Applying category filter: NONE");
      trainFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("trainability", "<=", 3);
      let filteredArray4 = shedFac.filter(function (array_el) {
        return (
          trainFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    } else if (userInput.training === "BASIC") {
      console.log("Applying category filter: BASIC");
      trainFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("trainability", 4);
      let filteredArray4 = shedFac.filter(function (array_el) {
        return (
          trainFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    } else if (userInput.training === "ADVANCED") {
      console.log("Applying category filter: ADVANCED");
      trainFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("trainability", 5);
      let filteredArray4 = shedFac.filter(function (array_el) {
        return (
          trainFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    }

    let groomFac;
    if (userInput.grooming === "DAILY") {
      console.log("Applying category filter: DAILY");
      groomFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("grooming", 4);
      let filteredArray5 = trainFac.filter(function (array_el) {
        return (
          groomFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    } else if (userInput.grooming === "WEEKLY") {
      console.log("Applying category filter: WEEKLY");
      groomFac = await knex
        .select("*")
        .from("dog_breed")
        .andWhere("grooming", 3);
      let filteredArray5 = trainFac.filter(function (array_el) {
        return (
          groomFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    } else if (userInput.grooming === "OCCASIONALLY") {
      console.log("Applying category filter: OCCASIONALLY");
      groomFac = await knex
        .select("*")
        .from("dog_breed")
        .whereIn("grooming", [1, 2]);
      let filteredArray5 = trainFac.filter(function (array_el) {
        return (
          groomFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    }

    let weightFac;
    if (userInput.weight === "20 LBS OR UNDER  ") {
      console.log("Applying category filter:  < 20");
      weightFac = await knex
        .select("*")
        .from("dog_breed")
        .whereBetween("weight", [0, 20]);
      let filteredArray6 = groomFac.filter(function (array_el) {
        return (
          weightFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    } else if (userInput.weight === "20-50 LBS ") {
      console.log("Applying category filter: 20-50");
      weightFac = await knex
        .select("*")
        .from("dog_breed")
        .whereBetween("weight", [20, 50]);
      let filteredArray6 = groomFac.filter(function (array_el) {
        return (
          weightFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    } else if (userInput.weight === "50 LBS OR MORE") {
      console.log("Applying category filter: > 50");
      weightFac = await knex
        .select("*")
        .from("dog_breed")
        .where("weight", ">", 50);
      let filteredArray6 = groomFac.filter(function (array_el) {
        return (
          weightFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
    }

    let barkFac;
    if (userInput.bark === "NONE") {
      console.log("Applying category filter: NONE");
      barkFac = await knex.select("*").from("dog_breed").andWhere("barking", 1);
      let filteredArray7 = weightFac.filter(function (array_el) {
        return (
          barkFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });

      matchedCategories.push(...filteredArray7);
    } else if (userInput.bark === "SOME BARKING IS OK ") {
      console.log("Applying category filter: Some is ok");
      barkFac = await knex
        .select("*")
        .from("dog_breed")
        .whereIn("barking", [2, 3]);
      let filteredArray7 = weightFac.filter(function (array_el) {
        return (
          barkFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });

      matchedCategories.push(...filteredArray7);
      console.log(matchedCategories);
    } else if (userInput.bark === "BARKING IS NOT AN ISSUE  ") {
      console.log("Applying category filter: Not an issue");
      barkFac = await knex.select("*").from("dog_breed").andWhere("barking", 5);
      let filteredArray7 = weightFac.filter(function (array_el) {
        return (
          barkFac.filter(function (anotherOne_el) {
            return anotherOne_el.id == array_el.id;
          }).length == 0
        );
      });
      matchedCategories.push(...filteredArray7);
      console.log(matchedCategories);
    }

    const extractedData = matchedCategories.map(({ name, image_link }) => ({
      name,
      image_link,
    }));

    // Remove duplicate categories from matchedCategories if needed
    const uniqueMatchedCategories = [...new Set(matchedCategories)];

    // Send back the matched categories as the response
    res.json({ matchedCategories: extractedData });
  } catch (error) {
    console.error("Error matching criteria:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { matchCriteria };

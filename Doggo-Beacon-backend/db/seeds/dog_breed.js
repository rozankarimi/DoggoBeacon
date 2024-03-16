/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("dog_breed").del();
  await knex("dog_breed").insert([
    {
      id: 1,
      name: "Golden Retriever",
      image_link: "https://api-ninjas.com/images/dogs/golden_retriever.jpg",
      shedding: 4, //4
      grooming: 2, //6
      playfulness: 4, //2
      trainability: 5, //5
      energy: 3, //3
      barking: 1, //8
      height: 24.0, //1
      weight: 65.0, //7
    },
    {
      id: 2,
      name: "Shih Tzu",
      image_link: "https://api-ninjas.com/images/dogs/shih_tzu.jpg",
      shedding: 1,
      grooming: 4,
      playfulness: 3,
      trainability: 4,
      energy: 3,
      barking: 3,
      height: 10.5,
      weight: 16,
    },

    {
      id: 3,
      name: "Bulldog",
      image_link: "https://api-ninjas.com/images/dogs/bulldog.jpg",
      shedding: 3,
      grooming: 3,
      playfulness: 4,
      trainability: 4,
      energy: 3,
      barking: 2,
      height: 15,
      weight: 50,
    },
    {
      id: 4,
      name: "Poodle (Miniature)",
      image_link: "https://api-ninjas.com/images/dogs/poodle_(miniature).jpg",
      shedding: 1,
      grooming: 4,
      playfulness: 5,
      trainability: 5,
      energy: 4,
      barking: 4,
      height: 15,
      weight: 15,
    },
    {
      id: 5,
      name: "Dachshund",
      image_link: "https://api-ninjas.com/images/dogs/dachshund.jpg",
      shedding: 2,
      grooming: 2,
      playfulness: 4,
      trainability: 4,
      energy: 3,
      barking: 5,
      height: 9,
      weight: 32,
    },
    {
      id: 6,
      name: "Boston Terrier",
      image_link: "https://api-ninjas.com/images/dogs/boston_terrier.jpg",
      shedding: 2,
      grooming: 2,
      playfulness: 5,
      trainability: 4,
      energy: 4,
      barking: 2,
      height: 17,
      weight: 25,
    },
    {
      id: 7,
      name: "Shetland Sheepdog",
      image_link: "https://api-ninjas.com/images/dogs/shetland_sheepdog.jpg",
      shedding: 3,
      grooming: 3,
      playfulness: 5,
      trainability: 5,
      energy: 4,
      barking: 5,
      height: 16,
      weight: 25,
    },
    {
      id: 8,
      name: "Siberian Husky",
      image_link: "https://api-ninjas.com/images/dogs/siberian_husky.jpg",
      shedding: 4,
      grooming: 2,
      playfulness: 5,
      trainability: 3,
      energy: 5,
      barking: 5,
      height: 23.5,
      weight: 50,
    },
    {
      id: 9,
      name: "Rottweiler",
      image_link: "https://api-ninjas.com/images/dogs/rottweiler.jpg",
      shedding: 3,
      grooming: 1,
      playfulness: 4,
      trainability: 5,
      energy: 3,
      barking: 1,
      height: 27,
      weight: 100,
    },
    {
      id: 10,
      name: "German Shepherd Dog",
      image_link: "https://api-ninjas.com/images/dogs/german_shepherd_dog.jpg",
      shedding: 4,
      grooming: 2,
      playfulness: 4,
      trainability: 5,
      energy: 5,
      barking: 3,
      height: 26,
      weight: 70,
    },
    {
      id: 11,
      name: "Boxer",
      image_link: "https://api-ninjas.com/images/dogs/boxer.jpg",
      shedding: 2,
      grooming: 2,
      playfulness: 4,
      trainability: 4,
      energy: 4,
      barking: 3,
      height: 25,
      weight: 65,
    },
    {
      id: 12,
      name: "Shiba Inu",
      image_link: "https://api-ninjas.com/images/dogs/shiba_inu.jpg",
      shedding: 3,
      grooming: 2,
      playfulness: 3,
      trainability: 2,
      energy: 3,
      barking: 3,
      height: 16.5,
      weight: 17,
    },
    {
      id: 13,
      name: "Havanese",
      image_link: "https://api-ninjas.com/images/dogs/havanese.jpg",
      shedding: 2,
      grooming: 3,
      playfulness: 5,
      trainability: 4,
      energy: 3,
      barking: 4,
      height: 11.5,
      weight: 13,
    },
    {
      id: 14,
      name: "Cocker Spaniel",
      image_link: "https://api-ninjas.com/images/dogs/cocker_spaniel.jpg",
      shedding: 3,
      grooming: 4,
      playfulness: 3,
      trainability: 4,
      energy: 4,
      barking: 3,
      height: 15.5,
      weight: 25,
    },
    {
      id: 15,
      name: "Doberman Pinscher",
      image_link: "https://api-ninjas.com/images/dogs/doberman_pinscher.jpg",
      shedding: 4,
      grooming: 1,
      playfulness: 4,
      trainability: 5,
      energy: 5,
      barking: 3,
      height: 28,
      weight: 90,
    },
    {
      id: 16,
      name: "Bullmastiff",
      image_link: "https://api-ninjas.com/images/dogs/bullmastiff.jpg",
      shedding: 3,
      grooming: 1,
      playfulness: 3,
      trainability: 4,
      energy: 4,
      barking: 1,
      height: 27,
      weight: 120,
    },
    {
      id: 17,
      name: "Maltese",
      image_link: "https://api-ninjas.com/images/dogs/maltese.jpg",
      shedding: 1,
      grooming: 4,
      playfulness: 3,
      trainability: 3,
      energy: 3,
      barking: 3,
      height: 9,
      weight: 8.8,
    },
    {
      id: 18,
      name: "Border Collie",
      image_link: "https://api-ninjas.com/images/dogs/border_collie.jpg",
      shedding: 3,
      grooming: 3,
      playfulness: 5,
      trainability: 5,
      energy: 5,
      barking: 4,
      height: 22,
      weight: 55,
    },
    {
      id: 19,
      name: "Vizsla",
      image_link: "https://api-ninjas.com/images/dogs/vizsla.jpg",
      shedding: 3,
      grooming: 2,
      playfulness: 5,
      trainability: 5,
      energy: 5,
      barking: 3,
      height: 24,
      weight: 55,
    },
    {
      id: 20,
      name: "Beagle",
      image_link: "https://api-ninjas.com/images/dogs/beagle.jpg",
      shedding: 3,
      grooming: 2,
      playfulness: 4,
      trainability: 3,
      energy: 4,
      barking: 4,
      height: 15,
      weight: 30,
    },
  ]);
};
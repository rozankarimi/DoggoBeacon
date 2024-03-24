/**
 *@param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("dog_facts").del();
  await knex("dog_facts").insert([
    {
      id: 1,
      description:
        "During the Middle Ages, mixed breeds of peasants’ dogs were required to wear blocks around their necks to keep them from breeding with noble hunting dogs. Purebred dogs were very expensive and hunting became the province of the rich.",
    },
    {
      id: 2,
      description: "President Calvin Coolidge owned at least a dozen dogs.",
    },
    {
      id: 3,
      description:
        'The smallest dog on record was a matchbox-size Yorkshire Terrier. It was 2.5" tall at the shoulder, 3.5" from nose tip to tail, and weighed only 4 ounces.',
    },
    {
      id: 4,
      description:
        "Dogs in a pack are more likely to chase and hunt than a single dog on its own. Two dogs are enough to form a pack.",
    },
    {
      id: 5,
      description:
        "Chow Chows are born with pink tongues, which turn blue-black at 8 to 10 weeks.",
    },
    {
      id: 6,
      description:
        "A Border Collie named Chaser has learned the names of 1,022 toys, and can retrieve each by name.",
    },
    {
      id: 7,
      description:
        "The average dog's mouth can produce about 100-200 pounds of pressure per square inch.",
    },
    {
      id: 8,
      description:
        "Dogs can get jealous when their humans display affection toward someone or something else.",
    },
    {
      id: 9,
      description:
        "It is much easier for dogs to learn spoken commands if they are given in conjunction with hand signals or gestures.",
    },
    {
      id: 10,
      description:
        "The world's smallest dog was a Chihuahua named Miracle Milly, who weighed only 1.1 pounds.",
    },
    {
      id: 11,
      description:
        "Seventy percent of people sign their pet’s name on greeting and holiday cards.",
    },
    {
      id: 12,
      description:
        "Although it was once illegal to keep dogs as pets in Iceland's capital city, the laws have been relaxed.",
    },
    {
      id: 13,
      description:
        "Like human babies, Chihuahuas are born with a soft spot in their skull which closes with age",
    },
    {
      id: 14,
      description:
        "A dog’s vision is not fully developed until after the first month.",
    },
    {
      id: 15,
      description: "Three of the 12 dogs on the Titanic survived.",
    },
    {
      id: 16,
      description: "Puppies are blind, deaf and toothless when born.",
    },
    {
      id: 17,
      description:
        "Dogs need a strong sense of smell because their eyesight is not as keen as a human’s.",
    },
    {
      id: 18,
      description:
        "Dogs have sweat glands on their paws to help regulate their body temperature.",
    },
    {
      id: 19,
      description:
        "Dogs are omnivores -- they eat meat, grains and vegetables.",
    },
    {
      id: 20,
      description:
        "Dogs with little human contact in the first three months typically don’t make good pets.",
    },
  ]);
};


exports.seed = function(knex) {
  return knex('steps').insert([
    { text: 'mix egg, salt, sugar', recipe_id: 1, sequence: 1 },
    { text: 'fire beef for 15 minutes', recipe_id: 3, sequence: 3 },
    { text: 'stir for 20 minutes', recipe_id: 2, sequence: 2 },
    { text: 'cut for 10 minutes', recipe_id: 1, sequence: 4 },
    { text: 'boil for 5 mintues', recipe_id: 2, sequence: 5 },
  ]);
};


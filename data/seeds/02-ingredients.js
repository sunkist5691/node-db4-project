
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'salt' },
    { ingredient_name: 'sugar' },
    { ingredient_name: 'pepper' },
    { ingredient_name: 'milk' },
    { ingredient_name: 'noodle' },
    { ingredient_name: 'beef' },
    { ingredient_name: 'salad' },
  ]);
};


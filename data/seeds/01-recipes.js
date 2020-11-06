
exports.seed = function(knex) {
  return knex('recipes').insert([
    { recipe_name: 'Chocolate cake'},
    { recipe_name: 'Chicken Soup'},
    { recipe_name: 'BBQ'},
    { recipe_name: 'Cream Pasta'},
    { recipe_name: 'Taco'},
  ]);
};


exports.seed = function(knex) {
  return knex('ingredient_step').insert([
    { ingredient_id: 1, recipe_id: 1, step_id: 1, quantity: 1.5 },
    { ingredient_id: 2, recipe_id: 1, step_id: 4, quantity: 2.0 },
    { ingredient_id: 3, recipe_id: 1, step_id: 2, quantity: 3.0 },
    { ingredient_id: 4, recipe_id: 1, step_id: 2, quantity: 4.0 },
    { ingredient_id: 2, recipe_id: 2, step_id: 1, quantity: 1.2 },
    { ingredient_id: 3, recipe_id: 2, step_id: 1, quantity: 1.5 },
    { ingredient_id: 3, recipe_id: 2, step_id: 4, quantity: 1.5 },
    { ingredient_id: 1, recipe_id: 3, step_id: 2, quantity: 3.1 },
    { ingredient_id: 1, recipe_id: 3, step_id: 3, quantity: 10.0 },
    { ingredient_id: 2, recipe_id: 4, step_id: 2, quantity: 11.0 },
    { ingredient_id: 2, recipe_id: 4, step_id: 3, quantity: 0.5 },

  ]);
};

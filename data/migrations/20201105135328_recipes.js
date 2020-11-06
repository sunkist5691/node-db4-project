
exports.up = function(knex) {
  return knex.schema
  // recipes
   .createTable('recipes', tbl => {
      tbl.increments()

      tbl.string('recipe_name', 128)
         .notNullable()
   })
   // ingredients
   .createTable('ingredients', tbl => {
      tbl.increments()

      tbl.string('ingredient_name', 128)
         .notNullable()
         .unique()
   })
   // steps
   .createTable('steps', tbl => {
      tbl.increments()

      tbl.string('text', 128)
         .notNullable()

      tbl.integer('recipe_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('recipes')

      tbl.integer('sequence')
         .unsigned()
         .notNullable()
   })
   // ingredient_step
   .createTable('ingredient_step', tbl => {
      tbl.increments()

      tbl.integer('ingredient_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('ingredients')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
      
      tbl.integer('recipe_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('recipes')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')

      tbl.integer('step_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('steps')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')

      tbl.float('quantity')
         .unsigned()
         .notNullable()
   })
};

exports.down = function(knex) {
  return knex.schema
   .dropTableIfExists('ingredient_step')
   .dropTableIfExists('ingredients')
   .dropTableIfExists('steps')
   .dropTableIfExists('recipes')
};

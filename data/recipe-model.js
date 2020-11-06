const db = require('../data/db-config')

module.exports = {
   getRecipes,
   getShoppingList,
   getInstructions,
   getAllRecipe
}

function getRecipes(){
   return db('recipes')
}

function getShoppingList(recipe_id){

   /*
      select
         recipe_name,
         ingredient_name,
         quantity
      from recipes
      join ingredient_step as 'ist'
         on recipes.id = [ist].recipe_id
      join ingredients as 'ig'
         on ig.id = [ist].ingredient_id
      where recipes.id = 1
   */

   return db('recipes')
      .select('recipe_name', 'ingredient_name', 'quantity')
      .join('ingredient_step as ist', 'recipes.id', 'ist.recipe_id')
      .join('ingredients as ig', 'ig.id', 'ist.recipe_id')
      .where({ 'recipes.id': recipe_id})

}

function getInstructions(recipe_id){

   /*
      select
         recipe_name,
         sequence,
         text
      from recipes as 'r'
      join steps as 's'
         on r.id = s.recipe_id
      where r.id = 1
   */
   return db('recipes as r')
      .select('recipe_name', 'sequence', 'text')
      .join('steps as s', 'r.id', 's.recipe_id')
      .where({ 'r.id': recipe_id })
}

function getAllRecipe(ingredient_id){

   /* 
      select
         recipe_name,
         ingredient_name
      from ingredients as 'ig'
      join ingredient_step as 'ist'
         on ig.id = ist.ingredient_id
      join recipes as 'r'
         on r.id = ist.recipe_id
      where ig.id = 1
   */

   return db('ingredients as ig')
      .select('recipe_name', 'ingredient_name')
      .join('ingredient_step as ist', 'ig.id', 'ist.ingredient_id')
      .join('recipes as r', 'r.id', 'ist.recipe_id')
      .where({ 'ig.id': ingredient_id })
}
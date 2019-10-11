const db = require('../db/dbConfig.js');

module.exports = {find, findJoin, findJoinAgain }




// getRecipes(): should return a list of all recipes in the database.

function find() {
    return db('recipes')
}



// getShoppingList(recipe_id): should return a list of 
// all ingredients and quantities for a given recipe

function findJoin(id) {
    return db('recipe_ingredients')
    .innerJoin('recipes', 'recipe_ingredients.recipe_id', 'recipes.id')
    .innerJoin('ingredients', 'recipe_ingredients.ingredients_id', 'ingredients.id')

    .select('recipes.id', 'ingredients.name as ingredient', 'ingredients.quantity', 'recipes.name')
    .where('recipe_ingredients.recipe_id', id)
    .orderBy('ingredients.quantity')
} 


// getInstructions(recipe_id): should return a list of step by step 
// instructions for preparing a recipe

function findJoinAgain(id) {
    return db('recipe_ingredients')
    .innerJoin('recipes', 'recipe_ingredients.recipe_id', 'recipes.id')
    .innerJoin('instructions', 'recipe_ingredients.instructions_id', 'instructions.id')

    .select('recipes.id', 'recipes.name', 'instructions.step_one', 'instructions.step_two', 'instructions.step_three', 'instructions.step_four' )
    .where('recipe_ingredients.recipe_id', id)
    
}
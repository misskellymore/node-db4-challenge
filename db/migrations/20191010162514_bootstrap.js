
exports.up = function(knex) {

    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name');
        
        
    })

    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name');
        tbl.float('quantity');
    })

    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.string('Step_one')
        tbl.string('Step_two')
        tbl.string('Step_three')
        tbl.string('Step_four')
    })

    .createTable('recipe_ingredients', tbl => {
        tbl.increments()
        tbl.integer('recipe_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('recipes')

        tbl.integer('ingredients_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('ingredients')

          tbl.integer('instructions_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('instructions')
    })

    };



exports.down = function(knex) {

    return knex.schema.dropTableIfExists('recipe_ingredients')
                      .dropTableIfExists('instructions')
                      .dropTableIfExists('ingredients')                      
                      .dropTableIfExists('recipes')
                      
  
};

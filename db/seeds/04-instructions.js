
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_one: 'put mushroom in oven', step_two: 'toast buns', step_three: 'grill onions', step_four: 'put together'},
        
      ]);
    });
};

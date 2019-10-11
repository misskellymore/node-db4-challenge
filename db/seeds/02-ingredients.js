
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'portobello', quantity: 'one'},
        {name: 'burger buns', quantity: 'one'},
        {name: 'onions', quantity: .25}
        
        
      ]);
    });
};

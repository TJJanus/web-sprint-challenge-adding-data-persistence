
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Create React App', description: 'Use CRA to spin it up', completed: false },
        { name: 'Create server', description: 'use express or node', completed: false },
        { name: 'Edit the styles', description: 'use materialUI', completed: false }
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'PC', description: 'start creating on the PC'},
        {name: 'Computer', description: 'program with the computer'},
        {name: 'Mac', description: 'Most devs use Macs'},
        {name: 'Phone', description: 'You need tools'},
        {name: 'TV', description: 'grab a screwdriver'},
        {name: 'Lamp', description: 'get a lightbulb'},
        {name: 'Monitor', description: 'Plug it In'},
        {name: 'Keyboard', description: 'Switch out the keys'},

      ]);
    });
};

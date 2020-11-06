
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'create an app', notes: 'notes', completed: false },
        {project_id: 1, description: 'create a react app', notes: 'notes about react', completed: false },
        {project_id: 1, description: 'create a js file', notes: 'notes about js files', completed: false },
        {project_id: 2, description: 'use express', notes: 'express notes', completed: false },
        {project_id: 2, description: 'use node', notes: 'node notes', completed: false },
        {project_id: 2, description: 'use amazon web', notes: 'amazon notes', completed: false },
        {project_id: 3, description: 'edit styles', notes: 'notes about materialUI', completed: false },
        {project_id: 3, description: 'use CSS', notes: 'notes about css', completed: false },
        {project_id: 3, description: 'use styled comps', notes: 'notes about styledC', completed: false },

      ]);
    });
};

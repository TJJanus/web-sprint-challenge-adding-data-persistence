
exports.up = function(knex) {
  return knex.schema 
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name', 128).notNullable()
        tbl.string('description', 128)
        tbl.boolean('completed').notNullable().defaultTo(false)
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.integer('project_id').notNullable()
        tbl.string('description', 128).notNullable()
        tbl.string('notes', 128)
        tbl.boolean('completed').notNullable().defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('name', 128).notNullable().unique()
        tbl.string('description', 128)
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
        .references('id')
        .inTable('projects')
        
        tbl.integer('resource_id')
            .references('id')
            .inTable('resources')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};

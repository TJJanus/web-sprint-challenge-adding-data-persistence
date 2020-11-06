const db = require('../data/db-config')

function getProjects() {
    return db('projects as p')
}

function getResources()  {
    return db('resources as r')
}

function addProject(project) {
    return db('projects').insert(project)
}

function addTask(task) {
    return db('tasks').insert(task)
}

function addResource(resource){
    return db('resources').insert(resource)
}
function getProjectTasks(project_id) {
    return db('projects as p')
        .where('p.id', project_id)
        .select('p.name as project_name', 'p.description as project_description', 't.description as task_description', 't.notes')
        .innerJoin('tasks as t', 'p.id', 't.project_id')
}


module.exports = {
    getProjects,
    getResources,
    addProject,
    addTask,
    addResource,
    getProjectTasks,
    


}
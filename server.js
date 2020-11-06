const express = require('express')

const server = express();
const Projects = require('./models/project-model');
server.use(express.json())


server.get('/', (req , res) => {
    res.json({ api: 'up' })
})

// [GET all projects]
server.get('/projects', (req , res) => {
    Projects.getProjects()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log(error)
        })
})


server.get('/resources', (req , res) => {
    Projects.getResources()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log(error)
        })
})

server.post('/projects', (req, res) => {
    const newProject = req.body
    Projects.addProject(newProject)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log(error)
        })
})


server.post('/tasks', (req, res) => {
    const newTask = req.body
    Projects.addTask(newTask)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log(error)
        })
})

server.post('/resources', (req , res) => {
    const newResource = req.body
    Projects.addResource(newResource)
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        console.log(error)
    })
})


server.get('/tasks/:id', (req, res) => {
    const { id } = req.params
    Projects.getProjectTasks(id)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log(error)
        })
})


module.exports = server;
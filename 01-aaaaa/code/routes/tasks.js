/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()
var taskList = require('./tasksData')
const fetch = require('node-fetch')

router.get('/', async (req, res) => {
    res.json({
        result: "ok",
        tasks: taskList,
        message: `Get list of tasks successfully`
    })
})

router.get('/:id', async (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    if (isNaN(id)) {
        res.json({
            result: "failed",
            message: `You must enter task's id. Id must be a number`
        })
        return
    }
    let foundTask = taskList.find(task => task.id === id)
    if (foundTask) {
        res.json({
            result: "ok",
            task: foundTask,
            message: `Get task's detail successfully`
        })
    } else {
        res.json({
            result: "failed",
            message: `Cannot find task with id = ${id}`
        })
    }
})
router.post('/', async (req, res) => {
    let { title, completed } = req.body
    if (["0", "1"].indexOf(completed) < 0) {
        res.json({
            result: "failed",
            message: `You must enter task's completed. Id must be 0 or 1`
        })
        return
    }
    let taskWithMaxId = taskList.sort((t1, t2) => t1.id < t2.id)[0]
    taskList.push({
        id: taskWithMaxId.id + 1,
        title,
        completed: parseInt(completed)
    })

    res.json({
        result: "ok",
        task: taskList,
        message: `insert new task successfully`
    })
})

router.put('/', async (req, res) => {
    let { id, title, completed } = req.body
    id = parseInt(id)
    if (isNaN(id)) {
        res.json({
            result: "failed",
            message: `You must enter task's id. Id must be a number`
        })
        return
    }
    let foundTask = taskList.find(task => {
        return task.id === id
    })
    if (foundTask) {
        foundTask.title = (title !== null) ? title : foundTask.title
        if (["0", "1"].indexOf(completed) > -1) {
            foundTask.completed = completed
        }
        res.json({
            result: "ok",
            task: foundTask,
            message: `Update a task successfully`
        })
    } else {
        res.json({
            result: "failed",
            message: `Cannot find task with id = ${id} to update`
        })
    }
})
// res.send(`taskWithMaxId = ${JSON.stringify(taskWithMaxId)}`)
// res.send(`taskWithMaxId ID = ${taskWithMaxId.id}`)
router.delete('/', async (req, res) => {
    let { id } = req.body
    id = parseInt(id)
    if (isNaN(id)) {
        res.json({
            result: "failed",
            message: `You must enter task's id. Id must be a number`
        })
        return
    }
    taskList = taskList.filter(task => task.id !== id)
    res.json({
        result: "ok",
        tasks: taskList,
        message: `Delete a task successfully`
    })
})
const fetchDataFromJsonPlaceHolder = async () => {
    const urlString = "https://jsonplaceholder.typicode.com/todos"
    try {
        let response = await fetch(urlString, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },            
        })
        console.log(`aa = ${JSON.stringify(response)}`)
        let responseTasks = await response.json()
        debugger
        return responseTasks
    } catch (error) {
        return []
    }
}
router.get('/forms/tasksForm', async (req, res) => {    
    try {
        let taskList = await fetchDataFromJsonPlaceHolder()
        res.render("tasksForm", { tasks: taskList })
    } catch (error) {
        
    }
})

module.exports = router

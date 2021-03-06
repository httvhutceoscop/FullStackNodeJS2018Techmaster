/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
--Task routers
*/
var express = require('express')
var router = express.Router()

var taskData = require('./taskData')
router.get('/', async (req, res) => {
    res.json({
        result: "ok",
        tasks: taskData,
        message: `Get list of tasks successfully`
    })
})
//Request dạng "params"
router.get('/:id', async (req, res) => {
    const {id} = req.params
    if (isNaN(parseInt(id)) === true) {//NaN = Not a Number
        res.json({
            result: "failed",
            message: `You must enter task's id. Id must be a number`
        })
        return
    }
    let foundTask = taskData.find(task => task.id === parseInt(id))
    if (foundTask) {
        res.json({
            result: "ok",
            task: foundTask,
            message: `Get task's detail successfully`
        })
    } else {
        res.json({
            result: "failed",
            task: {},
            message: `Cannot find task with id = ${id}`
        })
    }
})
//Thêm mới 1 Task
router.post('/', async (req, res) => {
    debugger
    let {title = '', completed = 0} = req.body
    //Thuộc tính "completed" nên để 0,1, ko nên để true, false
    if (["0", "1"].indexOf(completed) < 0) {
        res.json({
            result: "failed",
            message: `You must enter task's completed. Id must be 0 or 1`
        })
        return
    }
    let taskWithMaxId = taskData.sort((t1, t2) => t1.id < t2.id)[0]
    taskData.push({
        id: taskWithMaxId.id + 1,
        title,
        completed: (parseInt(completed) > 0)
    })
    res.json({
        result: "ok",
        task: taskData,
        message: `insert new task successfully`
    })
})
//Sửa đổi 1 Task => phương thức PUT
router.put('/', async (req, res) => {
    let { id, title, completed } = req.body
    if (isNaN(parseInt(id)) === true) {//NaN = Not a Number
        res.json({
            result: "failed",
            message: `You must enter task's id. Id must be a number`
        })
        return
    }
    let foundTask = taskData.find(task => task.id === parseInt(id))
    if (foundTask) {
        foundTask.title = (title !== null) ? title : foundTask.title
        if (["0", "1"].indexOf(completed) >= 0) {
            foundTask.completed = (parseInt(completed) > 0)
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
//Delete = Phương thức xoá 1 record
router.delete('/', async (req, res) => {
    let { id } = req.body
    if (isNaN(parseInt(id)) === true) {//NaN = Not a Number
        res.json({
            result: "failed",
            message: `You must enter task's id. Id must be a number`
        })
        return
    }
    taskData = taskData.filter(task => task.id !== parseInt(id))
    res.json({
        result: "ok",
        tasks: taskData,
        message: `Delete a task successfully`
    })
})
module.exports = router

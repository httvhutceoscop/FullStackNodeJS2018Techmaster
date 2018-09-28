/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()

router.post('/add', async (req, res) => {    
    let { a = 0, b = 0 } = req.body //Trích xuất hoặc gán giá trị mặc định nếu ko có(null)
    a = parseInt(a)
    b = parseInt(b)
    if (isNaN(a)||isNaN(b)) {
        res.json({
            result: "",
            message: "Ko tìm thấy 2 số a, b"
        })
        return
    }
    res.json({
        result: "",
        message: `Tổng 2 số là : ${a+b}`
    })
})
router.post('/multiply', async (req, res) => {    
    let { a = 0, b = 0 } = req.body //Trích xuất hoặc gán giá trị mặc định nếu ko có(null)
    a = parseInt(a)
    b = parseInt(b)
    if (isNaN(a)||isNaN(b)) {
        res.json({
            result: "",
            message: "Ko tìm thấy 2 số a, b"
        })
        return
    }
    res.json({
        result: "",
        message: `Tích 2 số là : ${a*b}`
    })
})
module.exports = router

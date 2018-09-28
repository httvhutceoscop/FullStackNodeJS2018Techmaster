/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()

router.get('/bmi', async (req, res) => {
    //BMI = Body Mass Index
    let {name = "", weight = 0, height } = req.query
    weight = parseFloat(weight)
    height = parseFloat(height)
    if (isNaN(weight)||isNaN(height)) {
        res.json({
            result: "",
            message: "Bạn phải nhập chiều cao và cân nặng"
        })
        return
    }
    if (name === "") {
        res.json({
            result: "",
            message: "Bạn phải nhập tên người "
        })
        return
    }
    let message = ""
    //weight = kilograms, height = meters
    let bmi = weight / (height * height)
    res.json(books)
})
module.exports = router

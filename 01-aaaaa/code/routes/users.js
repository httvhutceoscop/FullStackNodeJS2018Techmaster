/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()
//http://127.0.0.1:8080/users/bmi?name=Hoang&weight=80&height=1.6
router.get('/bmi', async (req, res) => {
    //BMI = Body Mass Index
    let {name = "", weight = 0, height = 0 } = req.query
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
            message: "Bạn phải nhập tên người"
        })
        return
    }
    let message = ""
    //weight = kilograms, height = meters    
    let bmi = Math.round(weight / (height * height),2)
    if (bmi < 15) {
        message = "Quá gầy"
    } else if(bmi >= 15 && bmi < 18.5) {
        message = "Hơi gầy"
    } else if(bmi >= 18.5 && bmi < 25) {
        message = "Thể trạng bình thường"
    } else if(bmi >= 25 && bmi < 30) {
        message = "Hơi mập"
    } else if(bmi >= 30 && bmi < 40) {
        message = "Mập"
    } else if(bmi >= 40) {
        message = "Quá mập"
    }
    res.json({
        result: `Chỉ số BMI của bạn: ${name} là: ${bmi}`,
        message
    })
})
router.get('/bmiForm', async (req, res) => {
    //BMI = Body Mass Index
    res.render('users');
})
module.exports = router

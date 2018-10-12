/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()

//http://127.0.0.1:8080/users/bmi?name=Hoang&weight=80&height=1.6
router.get('/bmi', async (req, res) => {
    //BMI = Body Mass Index
    let {name = '', weight = 0, height = 0} = req.query
    weight = parseFloat(weight)
    height = parseFloat(height)
    if (isNaN(weight)||isNaN(height)) { //NaN = Not a Number 
        res.json({
            result: "failed",
            message: "Bạn phải nhập chiều cao và cân nặng"
        })
        return
    }
    if (name === "") {
        res.json({
            result: "ok",
            message: "Bạn phải nhập tên người"
        })
        return
    }
    debugger
    let bmi = Math.round(weight / (height * height), 2)
    let message = ""
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
        result: "ok",
        data: bmi,
        message: `Chỉ số BMI của bạn: ${name} là: ${bmi} => ${message}`
    })
})
//http://127.0.0.1:8080/users/bmiPage
router.get('/bmiPage', async (req, res) => {
    //Muốn trả về 1 trang html ?
    //Dùng định dạng .ejs = Extended Javascript
    res.render('bmiPage') //Tên file .ejs
})
let users = [{'admin': '@123'}, {'bob' : '#321'}, {'jane': 'bob'}]
router.post('/login', async (req, res) => {  
    //Phương thức POST gửi qua Postman, ko dùng Chrome, Firefox
    let { name = '', password = ''} = req.body
    const foundUser = users.find(user => {
        return user[name] === password
    })
    if (foundUser) {
        res.json({
            result: "ok",            
            message: `Đăng nhập thành công`
        })
    } else {
        res.json({
            result: "failed",
            message: "Tên hoặc mật khẩu sai"
        })
    }
})
//Login page
router.get('/loginPage', async (req, res) => {    
    res.render('loginPage')          
})
router.get('/loginFailed', async (req, res) => {    
    res.render('loginFailed')       
})
router.get('/loginSuccess', async (req, res) => {    
    res.render('loginSuccess')          
})

module.exports = router
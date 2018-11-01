/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Viết api đăng nhập user với mật khẩu được mã hoá
 Cần cài một số thư viện sau:
 npm install -i express
 npm install -i body-parser
 npm install -i bcrypt
 */
const express = require('express')
const app = express()
const PORT = 3000
//Nhúng middleware body-parser vào Express
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Tuỳ biến Router
const usersRouter  = require('./routers/usersRouter')
app.use('/users', usersRouter)
//Start server
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
})
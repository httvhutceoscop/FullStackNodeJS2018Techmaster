/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 npm install -i body-parser
 npm install -i express
 npm install -i bcrypt
 */
const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const usersRouter  = require('./routers/usersRouter')
app.use('/users', usersRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

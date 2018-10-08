/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
const express = require('express')
const app = express()
const PORT = 8080
//Router
const systemInfo = require('./routes/systemInfo')
const redirectExample = require('./routes/redirectExample')

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`)
})
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.send(`<h1 style="color: blue;">Hello world !</h1>`)
})
//http://localhost:8080/aboutus
app.get('/aboutus', (req, res) => {
    res.send('This is about page ')
})
app.use('/systemInfo', systemInfo)//http://localhost:8080/systemInfo
app.use('/redirectExample', redirectExample)
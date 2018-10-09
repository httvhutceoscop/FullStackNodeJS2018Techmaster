/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
const express = require('express')
const path = require('path')
const app = express()
const PORT = 8080
//Set View's engine
app.set('view engine', 'ejs') //Extended JavaScript
app.use(express.static(path.join(__dirname, 'javascripts')))//js in client
//Router
const systemInfo = require('./routes/systemInfo')
const redirectExample = require('./routes/redirectExample')
const books = require('./routes/books')
const files = require('./routes/files')
const users = require('./routes/users')

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
app.use('/books', books)
app.use('/files', files)
app.use('/users', users)

app.use((req, res) => {
    const http404file = path.join(__dirname)+'/error404.html'
    res.status(404).sendFile(http404file)
})
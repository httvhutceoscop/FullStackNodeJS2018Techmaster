/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const port = 8080
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send('<h1>Hello World!</h1>')
})

app.get('/aboutus', (req, res) => {
    res.send('This is About page')
})

//http://127.0.0.1:8080/say?name=Tom&age=18
app.get('/say', (req, res) => {
    //debugger; 
    let { name, age } = req.query
    res.send(`Name : ${name}, age = ${age}`)
})

let redirectFrom = ""
app.get('/old', (req, res) => {
    if (redirectFrom === "new") {
        redirectFrom = ""
        res.send(`This is Old !`)
    } else {
        redirectFrom = "old"
        res.redirect('/new')
    }
})
app.get('/new', (req, res) => {
    if (redirectFrom === "old") {
        redirectFrom = ""
        res.send(`This is New !`)
    } else {
        redirectFrom = "new"
        res.redirect('/old')
    }
})
//Định nghĩa các routes
const books = require('./routes/books')
const files = require('./routes/files')
const system = require('./routes/system')
const users = require('./routes/users')
const calculations = require('./routes/calculations')

app.use('/books', books)
app.use('/files', files)
app.use('/system', system)
app.use('/users', users)
app.use('/calculations', calculations)


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname + '/error404.html'))
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
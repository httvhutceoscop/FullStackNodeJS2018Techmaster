/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()

router.get('/', async (req, res) => {
    console.log(`req.ip = ${req.ip}`)
    console.log(`req.hostname = ${req.hostname}`)    
    let { requests = {} } = req.session
    console.log(`requests = ${JSON.stringify(requests)}`)
    console.log(`request.connection.remoteAddress = ${req.connection.remoteAddress}`)
    let remoteAddress = req.connection.remoteAddress
    requests[remoteAddress] = (requests[remoteAddress] == null) ? 0 : requests[remoteAddress]
    requests[remoteAddress] = requests[remoteAddress] + 1
    //Save session
    req.session.requests = requests            
    req.session.save((error) => {
        if (error == null) {
            debugger
            console.log("save session successfully")
        }
    })
    res.render("counterPage", { numberOfRequests: requests[remoteAddress] })
})

module.exports = router

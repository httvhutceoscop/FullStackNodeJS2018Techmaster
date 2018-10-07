/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()

router.get('/', async (req, res) => {    
    try {
        res.render("homePage", {
            
        })
    } catch (error) {

    }
})

module.exports = router

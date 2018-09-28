/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()
const os = require('os')

// Đọc URL parameter để xử lý logic
//http://127.0.0.1:8080/info?type=os
router.get('/info', async (req, res) => {
    let { type } = req.query
    switch (type.toLowerCase()) {
        case 'os':
            const osPlatform = os.platform()
            const osType = os.type()
            res.send(`Operating system's platform : ${osPlatform}, type: ${osType}`)
            break
        case 'framework':
            res.send(`This is Express Framework`)
            break
        case 'date':
            let currentDate = new Date()
            res.send(`Current date is : ${currentDate.toUTCString()}`)
            break;
        default:
            res.send(`You entered wrong type !`)
    }
})
module.exports = router

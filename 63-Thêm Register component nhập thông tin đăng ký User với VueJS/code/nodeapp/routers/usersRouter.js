/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Routers for "User" collection
 */
const express = require('express')
const router = express.Router()
const { insertUser } = require('../database/models/User')
var cors = require('cors')

router.use((req, res, next) => {
    console.log('Time: ', Date.now()) //Time log
    next()
})
router.post('/registerUser', async (req, res) =>{
	res.setHeader('Access-Control-Allow-Origin', '*')
	let {name, email, password} = req.body //Phần validate trường chúng ta sẽ học ở bài khác    
    try {
		await insertUser(name, email, password)		
	  	res.json({
	  		result: 'ok',
	  		message: 'Đăng ký user thành công, bạn cần mở mail để kích hoạt'
	  	})		
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Không thể đăng ký thêm user. Lỗi : ${error}`
        })
	}
})
module.exports = router
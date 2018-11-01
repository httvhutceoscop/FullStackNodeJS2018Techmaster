/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Routers for "User" collection
 */
const express = require('express')
const router = express.Router()
const {insertUser} = require('../database/models/User')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now()) //Time log
  next()
})
// define the home page route
router.post('/registerUser', async (req, res) =>{
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
/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Routers for "User" collection
 */
const express = require('express')
const router = express.Router()
const { 
	insertUser, 
	activateUser, 
	verifyJWT,
	loginUser 
} = require('../database/models/User')

router.use((req, res, next) => {
    console.log('Time: ', Date.now()) //Time log
    next()
})
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
//router để kích hoạt user
//VD:
//http://Nguyens-iMac:3000/users/activateUser?secretKey=$2b$10$U4iDuK4aJ0.QSvVfRy8g/uvmSCUB0B8KfX75uUj8qr3xudHXcDG7y&email=nodejst9@gmail.com
router.get('/activateUser', async (req, res) =>{	
	let {email, secretKey} = req.query	
	try {
		await activateUser(email, secretKey)
		res.send(`<h1 style="color:MediumSeaGreen;">Kích hoạt User thành công</h1>`)
	} catch(error) {
		res.send(`<h1 style="color:Red;">Không kích hoạt được User, lỗi: ${error}</h1>`)
	}
})
router.post('/loginUser', async (req, res) =>{	
	let {email, password} = req.body
    try {
		let tokenKey = await loginUser(email, password)
		res.json({
			result: 'ok',
			message: 'Đăng nhập user thành công',
			tokenKey
	  	})
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Không thể đăng nhập user. Lỗi : ${error}`
        })
	}
})
//Viết 1 api để test "tokenKey"
router.get('/jwtTest', async (req, res) => {		
	let tokenKey = req.headers['x-access-token']
    try {
		//Verify token
		await verifyJWT(tokenKey)
		res.json({
			result: 'ok',
			message: 'Verify Json Web Token thành công',	  		
	  	})	
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Lỗi kiểm tra token : ${error}`
        })
	}
})
module.exports = router
/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Routers for "User" collection
 */
const express = require('express')
const router = express.Router()
const { 	
	insertBlogPost 
} = require('../database/models/BlogPost')

router.use((req, res, next) => {
    console.log('Time: ', Date.now()) //Time log
    next()
})
router.post('/insertBlogPost', async (req, res) =>{
	let {title, content} = req.body
	let tokenKey = req.headers['x-access-token']
	debugger
    try {
        await insertBlogPost(title, content, tokenKey)
	  	res.json({
	  		result: 'ok',
	  		message: 'Thêm mới BlogPost thành công'
	  	})		
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Không thể thêm mới BlogPost.Lỗi : ${error}`
        })
	}
})

module.exports = router
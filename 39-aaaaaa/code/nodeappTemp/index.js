/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 */
const mongoose = require('mongoose')
const {User, BlogPost, Comment} = require('./database/models')
//Tạo mới 1 user
const user = new User()
user.name = "Hoang"
user.age = 30
user.email = "sunlight4d@gmail.com"
user.save(error =>{
	if(error) {
		console.log(`Ko thể thêm mới bản ghi user.Error: ${error}`)
	} else {
		console.log('hêm mới bản ghi user thành công')
	}
})

/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa các User Model
 */
const {mongoose} = require('../database')
const bcrypt = require('bcrypt')
const {Schema} = mongoose

const UserSchema = new Schema({
    //schema: cấu trúc của 1 collection 
    name: {type: String, default: 'unknown', unique: true},    
    email: {type: String, match:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, unique: true},
    password: {type: String, required: true},    
    active: {type: Number, default: 0}, //inactive
    secretKey:{ type: String },    
})

//Chuyển từ Schema sang Model
const User = mongoose.model('User', UserSchema)
//"User Controller" => những hàm liên quan đến User model
const insertUser = async (name, email, password) => {
    try {
    	//Mã hoá password trước khi lưu vào DB
	    const encryptedPassword = await bcrypt.hash(password, 10)//saltRounds = 10
	    debugger
	    //bcrypt.compare(myPlaintextPassword, hash)       
        const newUser = new User()
        newUser.name = name
        newUser.email = email
        newUser.password = encryptedPassword
        
        await newUser.save() 
    } catch(error) {
        //console.log(`Ko thể xoá hết các user.Error: ${error}`)
        debugger
        //throw error
        //Tự tuỳ chỉnh lại Error
        if (error.code === 11000) {
        	throw "Tên hoặc email đã tồn tại"
        }
    }
}
module.exports = { User, insertUser }
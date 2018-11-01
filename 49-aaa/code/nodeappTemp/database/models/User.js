/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa các User Model
 */
const {mongoose} = require('../database')
const bcrypt = require('bcrypt')
const {Schema} = mongoose
const {sendEmail} = require('../../helpers/utility')

const UserSchema = new Schema({
    //schema: cấu trúc của 1 collection 
    name: {type: String, default: 'unknown', unique: true},    
    email: {type: String, match:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, unique: true},
    password: {type: String, required: true},    
    active: {type: Number, default: 0}, //inactive  
})
//Chuyển từ Schema sang Model
const User = mongoose.model('User', UserSchema)
const insertUser = async (name, email, password) => {
    try {
    	//Mã hoá password trước khi lưu vào DB
	    const encryptedPassword = await bcrypt.hash(password, 10)//saltRounds = 10
        const newUser = new User()
        newUser.name = name
        newUser.email = email
        newUser.password = encryptedPassword        
        await newUser.save()        
        await sendEmail(email, encryptedPassword)
    } catch(error) {
        //Tự tuỳ chỉnh lại Error
        if (error.code === 11000) {
        	throw "Tên hoặc email đã tồn tại"
        }
        //throw error
    }
}
const activateUser = async (email, secretKey) => {
    try {
        let foundUser = await User.findOne({email, password: secretKey}).exec()
        if (!foundUser) {
            throw "Không tìm thấy User để kích hoạt"
        }
        if (foundUser.active === 0) {
            foundUser.active = 1
            await foundUser.save()            
        } else {
            throw "User đã kích hoạt"
        }        
    } catch(error) {
        throw error
               
    }
}
module.exports = {User, insertUser, activateUser}
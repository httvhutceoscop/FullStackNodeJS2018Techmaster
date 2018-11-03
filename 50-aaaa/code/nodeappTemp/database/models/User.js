/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa các User Model
 */
const {mongoose} = require('../database')
const bcrypt = require('bcrypt')
const {sendEmail} = require('../../helpers/utility')
const jwt = require('jsonwebtoken')
const secretString = "secret string"

const {Schema} = mongoose
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
const loginUser = async (email, password) => {
    try {                
        let foundUser = await User.findOne({email: email.trim()}).exec()
        if(!foundUser) {
            throw "User không tồn tại"            
        }
        if(foundUser.active === 0) {
            throw "User chưa kích hoạt, bạn phải mở mail kích hoạt trước"               
        }
        let encryptedPassword = foundUser.password
        let checkPassword = await bcrypt.compare(password, encryptedPassword)
        if (checkPassword == true) {
            //Đăng nhập thành công
            let tokenKey = await jwt.sign({ id: foundUser._id }, secretString, {
                                    expiresIn: 86400 // Expire trong 24 giờ
                                    })
            return tokenKey
        } else {
            throw "Sai email hoặc mật khẩu"
        }                
    } catch(error) {
        //Tự tuỳ chỉnh lại Error
        if (error.code === 11000) {
            throw "Tên hoặc email đã tồn tại"
        } else {
            throw error
        }
        //throw error
    }
}
const verifyJWT = async (tokenKey) => {
    try {          
        debugger      
        let decodedJson = await jwt.verify(tokenKey, secretString)           
        let foundUser = await User.findById(decodedJson.id)
        if(!foundUser) {
            throw "Sai hoặc thiếu token"
        }
        if(Date.now() / 1000 >  decodedJson.exp) {
            throw "Token hết hạn, mời bạn login lại"
        }
    } catch(error) {
        throw error
    }                 
}
//Hàm activeUser dùng 1 GET request
//VD:
//http://Nguyens-iMac:3000/users/activateUser?secretKey=$2b$10$U4iDuK4aJ0.QSvVfRy8g/uvmSCUB0B8KfX75uUj8qr3xudHXcDG7y&email=nodejst9@gmail.com
const activateUser = async (email, secretKey) => {
    try {
        let foundUser = await User.findOne({email, password: secretKey})
                                .exec()
        if (!foundUser) {
            throw "Không tìm thấy User để kích hoạt"
        }    
        if (foundUser.active === 0) {
            foundUser.active = 1
            await foundUser.save()            
        } else {
            throw "User đã kích hoạt"//foundUser.active = 1
        }
    } catch(error) {        
        throw error       
    }
}
module.exports = {User, insertUser, activateUser, loginUser, verifyJWT}
/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa BlogPost model
 */
const {mongoose} = require('../database')
const {Schema} = mongoose
const { User, verifyJWT } = require('./User')
const jwt = require('jsonwebtoken')//Mã hoá 1 jsonObject thành token(string)

const BlogPostSchema = new Schema({
    title: {type: String, default: 'Haha'},
    content: {type: String, default: ''},
    date: {type: Date, default: Date.now},
    //Trường tham chiếu, 1 blogpost do 1 người viết
    author:{type: mongoose.Schema.Types.ObjectId, ref: "User"}
})
//Chuyển từ Schema sang Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema)
//BlogPost controller
const insertBlogPost = async (title, content, date) => {
    try {
    	//User nào đăng nhập thì user đó mới thêm được bài viết
    	let tokenKey = req.headers['x-access-token']
	    let signedInUser = verifyJWT(tokenKey)
	    let newBlogPost = await BlogPost.create({
	    	title, content, 
	    	date: Date.now(),
	    	author: signedInUser
	    })
	    await newBlogPost.save()
    } catch(error) {        
        throw error
    }
}

module.exports = {
	BlogPost,
	insertBlogPost
}

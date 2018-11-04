/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa BlogPost model
 */
const {mongoose} = require('../database')
const {Schema} = mongoose
debugger
const {verifyJWT} = require('./User')

const BlogPostSchema = new Schema({
    title: {type: String, default: 'Haha', unique: true},
    content: {type: String, default: ''},
    date: {type: Date, default: Date.now},
    //Trường tham chiếu, 1 blogpost do 1 người viết
    author:{type: mongoose.Schema.Types.ObjectId, ref: "User"}
})
//Chuyển từ Schema sang Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema)
//BlogPost controller
const insertBlogPost = async (title, content, tokenKey) => {
    try {
    	//User nào đăng nhập thì user đó mới thêm được bài viết           
	    let signedInUser = await verifyJWT(tokenKey)
	    let newBlogPost = await BlogPost.create({
	    	title, content, 
	    	date: Date.now(),
	    	author: signedInUser
	    })        
	    await newBlogPost.save()
        signedInUser.blogPosts.push(newBlogPost)
        await signedInUser.save()
    } catch(error) {        
        throw error
    }
}

module.exports = {
	BlogPost,
	insertBlogPost
}

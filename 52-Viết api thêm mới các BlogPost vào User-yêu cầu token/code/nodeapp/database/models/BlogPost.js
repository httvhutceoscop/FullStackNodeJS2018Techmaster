/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa BlogPost model
 */
const {mongoose} = require('../database')
const {Schema} = mongoose
const {verifyJWT} = require('./User')
const BlogPostSchema = new Schema({
    title: {type: String, default: 'Haha', unique: true},
    content: {type: String, default: ''},
    date: {type: Date, default: Date.now},
    //Trường tham chiếu, 1 blogpost do 1 người viết
    author:{type: mongoose.Schema.Types.ObjectId, ref: "User"}
})
//Quan hệ 1 User - n BlogPost
const BlogPost = mongoose.model('BlogPost', BlogPostSchema)
//Một user thêm mới bài viết:
// User phải đăng nhập(hoặc có token Key) 
const insertBlogPost = async (title, content, tokenKey) => {
    try {
        //Kiểm tra đăng nhập = có tokenKey "còn hạn" ko
        let signedInUser = await verifyJWT(tokenKey)
        let newBlogPost = await BlogPost.create({
            title, content,
            date: Date.now(),
            author: signedInUser
        })
        await newBlogPost.save()
        await signedInUser.blogPosts.push(newBlogPost)
        await signedInUser.save()
        return newBlogPost
    } catch(error) {        
        throw error
    }
}
module.exports = {
    BlogPost,
    insertBlogPost
}
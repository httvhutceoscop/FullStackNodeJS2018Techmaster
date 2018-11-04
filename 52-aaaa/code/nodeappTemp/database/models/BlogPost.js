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

const queryBlogPosts = async (text) => {
    try {        
        let blogPosts = await BlogPost.find({
            $or: [
                {
                    title: new RegExp(text, "i")//i => ko phân biệt hoa/thường
                },
                {
                    content: new RegExp(text, "i")//i => ko phân biệt hoa/thường
                }
            ],                   
        })
        return blogPosts
    } catch(error) {        
        throw error
    }
}
const queryBlogPostsByDateRange = async (from, to) => {
    //format: dd-mm-yyyy    
    let fromDate = new Date(parseInt(from.split('-')[2]), parseInt(from.split('-')[1])-1, parseInt(from.split('-')[0]))
    let toDate = new Date(parseInt(to.split('-')[2]), parseInt(to.split('-')[1])-1, parseInt(to.split('-')[0]))        
    try {                
        let blogPosts = await BlogPost.find({
            date: {$gte: fromDate, $lte: toDate},            
        })        
        return blogPosts
    } catch(error) {        
        throw error
    }
}
const getDetailBlogPost = async (blogPostId) => {
    try {
        let blogPost = await BlogPost.findById(blogPostId)
        if (!blogPost) {
            throw `Không tìm thấy blogpost với Id=${blogPostId}`
        }
        return blogpost
    } catch(error) {        
        throw error
    }
}

module.exports = {
	BlogPost,
	insertBlogPost,
    queryBlogPosts,
    getDetailBlogPost,
    queryBlogPostsByDateRange,
    getDetailBlogPost
}
/*
Chạy quảng cáo Facebook
Để chạy quảng cáo Fb, bạn phải lập Fanpage, tạo tài khoản, viết bài quảng cáo, boost bài post

Mua ô tô cũ, nên hay không
Một số kinh nghiệm khi mua ô tô cũ,Những sự cố có thể gặp phải khi sử dụng xe cũ

Ứng xử đẹp khi xảy ra va chạm giao thông
Giữ cho bản thân và phương tiện an toàn khi tham gia giao thông là mục tiêu tất cả chúng ta đều hướng tới, tuy nhiên trên thực tế khi điều khiển phương tiện di chuyển sẽ có rất nhiều tình huống không lường trước được xảy ra. Lỗi có thể do nguyên nhân chủ quan hoặc khách quan và kết quả là va chạm

Có nên mua xe Piaggio medley cũ qua mạng?
Là một mẫu xe đắt tiền nên không phải ai cũng có có đủ tài chính để mua 1 chiếc xe mới nên lựa chọn mua xe piaggio medley cũ là một giải pháp để giảm bớt gánh nặng về tài chính. 

Khi nào phải bật xi nhan?
Trong khi chuyển hướng, người lái xe, người điều khiển xe máy chuyên dùng phải nhường quyền đi trước cho người đi bộ.


*/

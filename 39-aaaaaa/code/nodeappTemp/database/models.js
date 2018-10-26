/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 */
const mongoose = require('mongoose')
const { Schema } = mongoose;
const { ObjectId } = Schema;
const connectDatabase = async () => {
	try {
		await mongoose.connect('mongodb://hoangnd:123456@127.0.0.1:27018/fullstackNodejs2018',{
			connectTimeoutMS: 10000,
			useNewUrlParser: true,
			useCreateIndex: true,
		})
		console.log('Connect Mongo Database successfully')
	} catch(error) {
		console.log(`Cannot connect Mongo. Error: ${error}`)
	}

}
connectDatabase()

const UserSchema = new Schema({
  name: { type: String, default: 'unknown' },
  age: { type: Number, min: 18, index: true },
  email: { type: String, match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ }, //email regular expression
})

const BlogPostSchema = new Schema({
  author: ObjectId, //link to user'Id
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
})
const CommentSchema = new Schema({
  name: { type: String, default: 'Anonymous' },//lấy từ trường name của User  
  content: { type: String, match: /[a-z0-9]/ },
  date: { type: Date, default: Date.now },  
})
//Chuyển từ Schema sang Model
const User = mongoose.model('User', UserSchema)
const BlogPost = mongoose.model('BlogPost', BlogPostSchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {User, BlogPost, Comment}




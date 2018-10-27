/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa các hàm liên quan đến "User" collection
 */
const {User} = require('./models')
//Tạo ra 1 user mới
const insertUser = async (name, age, email) => {
	try {
		const newUser = new User()
		newUser.name = name
		newUser.age = age
		newUser.email = email
		await newUser.save()
		console.log(`Thêm mới bản ghi ${JSON.stringify(newUser	)} thành công`)
	} catch(error) {
		console.log(`Ko thể thêm mới bản ghi user.Error: ${error}`)
	}
}
//Xoá hết users => cẩn thận khi dùng !
const deleteAllUsers = async () => {
	try {
		await User.deleteMany({})
		console.log('Đã xoá hết các bản ghi user')
	} catch(error) {
		console.log(`Ko thể xoá hết các user.Error: ${error}`)
	}
}
//Tìm những người có tuổi >= 30,tên có chứa chữ "le", ko phân biệt hoa-thường()
const findSomeUsers = async () => {
	try {
		let foundUsers = await User.find({age: {$gte: 20}, name: /le/i})
		console.log(`foundUsers = ${JSON.stringify(foundUsers)}`)
		console.log(`Tổng số: ${foundUsers.length}`)
	} catch(error) {
		console.log(`Ko tìm thấy user.Error: ${error}`)
	}
}

module.exports = {insertUser, deleteAllUsers, findSomeUsers}
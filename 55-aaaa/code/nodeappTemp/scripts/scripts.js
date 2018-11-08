/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa các functions ko được public thành API, VD: phân quyền user admin
 */
const {mongoose} = require('../database/database')
const {User} = require('../database/models/User')
const makeUserBecomeAdmin = async (userId) => {
	try {
		let user = await User.findById(userId)
		if (!user) {
			console.log(`Cannot find user with id = ${user.id} to update`)
			return
		}
		user.isBanned = 0
		user.active = 1
		user.permission = 2
		await user.save()
		console.log(`Update user with id = ${user.id} successfully`)			
	} catch(error) {
		console.log(`Cannot update user with id = ${user.id}. Error: ${error}`)	
	}
}
makeUserBecomeAdmin('5be3eef9da709b806ca5f521')

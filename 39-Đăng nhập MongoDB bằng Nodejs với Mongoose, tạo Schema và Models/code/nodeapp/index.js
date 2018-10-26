/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 */
const {User} = require('./database/models')
//Tạo ra 1 user mới
const user = new User()
user.name = "Hoang"
user.age = 30
user.email = "sunlight4d@gmail.com"
user.save(error => {
    if (error) {
        console.log(`Ko thể thêm mới bản ghi user.Error: ${error}`)
    } else {
        console.log('Thêm mới bản ghi user thành công')
    }
})
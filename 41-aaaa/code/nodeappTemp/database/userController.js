/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa các hàm liên quan đến "User" collection
 */

const {User} = require('./models')
//Hàm insert 1 user mới
const insertUser = async (name, age, email) => {
    try {
        const newUser = new User()
        newUser.name = name
        newUser.age = age
        newUser.email = email        
        await newUser.save()   
        console.log(`Thêm mới bản ghi ${JSON.stringify(newUser)} thành công`)    
    } catch(error) {
        console.log(`Ko thể thêm mới bản ghi user.Error: ${error}`)
    }
}
//Muốn xoá tất cả các bản ghi(doc) => cẩn thận khi dùng !
const deleteAllUsers = async () => {
    try {
        await User.deleteMany({})
        console.log('Đã xoá hết các bản ghi user')
    } catch(error) {
        console.log(`Ko thể xoá hết các user.Error: ${error}`)
    }
}
const findUserById = async (userId) => {
    try {
        let foundUser = await User.findById(userId)
        debugger;
        console.log(`foundUser = ${JSON.stringify(foundUser)}`)        
    } catch(error) {
        console.log(`Ko tìm thấy user.Error: ${error}`)
    }
}
//Hiện tất cả user, có sắp xếp, paging, chọn lọc field hiển thị
//Tìm những người có tuổi >= 30,tên có chứa chữ "le", ko phân biệt hoa-thường()
const findSomeUsers = async () => {
    try {
        let foundUsers = await User.find(
        {},//Hiện tất cả user
        ["name","email"], //Chỉ hiện tên và email, ko hiện tuổi        
        {
            sort:{
                skip:0, // số bản ghi bỏ qua
                limit:5, // Số bản ghi giới hạn. VD: trang 0=> skip = 0*5, limit=5; trang 1=> skip = 1*5, limit=5
                name: 1 //Sắp xếp theo thứ tự a,b,c, -1: theo thứ tụ z,y,x,...b,a
            }
        }
        )
        foundUsers.forEach(user => {
            console.log(`user = ${user}`)
        })        
        console.log(`Tổng số: ${foundUsers.length}`)
    } catch(error) {
        console.log(`Ko tìm thấy user.Error: ${error}`)
    }
}

module.exports = {
    insertUser, 
    deleteAllUsers, 
    findUserById,
    findSomeUsers
}
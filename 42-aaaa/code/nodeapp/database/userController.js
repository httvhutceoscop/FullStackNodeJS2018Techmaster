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
//Tìm kiếm 1 doc nào đó theo id
const findUserById = async (userId) => {
    try {
        let foundUser = await User.findById(userId)
        console.log(`foundUser = ${JSON.stringify(foundUser)}`)        
    } catch(error) {
        console.log(`Ko tìm thấy user.Error: ${error}`)
    }
}
//Hiện tất cả các users, hiện có điều kiện
const findSomeUsers = async () => {
    try {
        let foundUsers = await User.find(
            {}, //Hiện tất cả các users
            //Tìm những người có tuổi >= 30,
            //tên có chứa chữ "le", ko phân biệt hoa-thường()
            //{age: {$gte: 30}, name: /le/i},//insensitive-case
            ["name", "email","age"], 
            //Sắp xếp ?
            {
                sort: {                    
                    name: -1//1 => Sắp xếp theo thứ tự a,b,c, -1=> theo thứ tụ z,y,x,...b,a
                }
            }
        ).skip(2 * 5).limit(5) //Bỏ qua 10 bản ghi, chỉ hiện 5 
        //Paging:VD: 
        //trang 0=> skip = 0*5, limit=5
        //trang 1=> skip = 1*5, limit=5
        //trang 2=> skip = 2*5, limit=5
        foundUsers.forEach(user => {
            console.log(`user = ${user}`)
        }) 
        console.log(`Tổng số: ${foundUsers.length}`)
    } catch(error) {
        console.log(`Ko tìm thấy users.Error: ${error}`)
    }
}
module.exports = {
    insertUser, 
    deleteAllUsers,
    findUserById,
    findSomeUsers
}
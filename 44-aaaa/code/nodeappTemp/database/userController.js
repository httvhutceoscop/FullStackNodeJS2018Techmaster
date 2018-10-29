/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa các hàm liên quan đến "User" collection
 */
const { User, BlogPost } = require('./models')
//const { ObjectId } = require('mongoose').Types
const { ObjectId } = require('mongoose').Schema.Types
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
//Cập nhật thông tin 1 bản ghi(doc). Cách 1: dùng findOneAndUpdate
/*
const updateUser = async (userId, name, email, age) => {
    try {
        let newUser = {}
        //Nếu ko nhập "name" thì ko update "name"
        if(name !== undefined) {
            newUser.name = name
        }
        //Tương tự với email, age
        if(email !== undefined) {
            newUser.email = email
        }
        if(age !== undefined) {
            newUser.age = age
        }
        let updatedUser = await User.findOneAndUpdate(
            {_id: ObjectId(userId)},
            newUser
        )
        if(updatedUser != null) {
            console.log(`update thành công.New user = ${JSON.stringify(newUser)}`)
        } else {
            console.log(`Không tìm thấy bản ghi để cập nhật`)
        }
    } catch(error) {
        console.log(`Ko update được thông tin user.Error: ${error}`)
    }
}
*/
//Cách 2: kết hợp findById và update
const updateUser = async (userId, name, email, age) => {
    try {
        let foundUser = await User.findById(userId)
        if(!foundUser) {
            console.log(`Không tìm thấy user với id=${userId} để cập nhật`)
            return
        }
        //Chỉ update nếu "có thay đổi"
        foundUser.name = (name !== undefined)?name:foundUser.name
        foundUser.email = (email !== undefined) ? email : foundUser.email
        foundUser.age = (age !== undefined) ? age : foundUser.age
        await foundUser.save()
        console.log(`update thành công.User = ${JSON.stringify(foundUser)}`)        
    } catch(error) {
        console.log(`Ko update được thông tin user.Error: ${error}`)
    }
}
//Xoá một user theo Id ?
const deleteUser = async (userId) => {
    try {
        await User.deleteOne({_id: ObjectId(userId)})
        console.log(`Xoá thành công bản ghi user với id = ${JSON.stringify(userId)}`)        
    } catch(error) {
        console.log(`Ko xoá được bản ghi user.Error: ${error}`)
    } 
}
//Case study: Tạo ra một user, user này "viết" 5 bài post
const createSomeUsersAndPosts = async () => {
    try {
        debugger;
        const mrHoangCartoon = new User({name: "Hoang cartoon", age: 32, email: "hoangcartoon@gmail.com", blogPosts:[]})        
        
        mrHoangCartoon.blogPosts = []
        //Danh sách 5 bài post
        const newBlogPost1 = new BlogPost({title: "Phim hoạt hình Tom& Jerry", 
                            content: "Đây là loạt phim cho các cháu thiếu nhi", 
                            date: Date.now(), author: mrHoangCartoon._id})
        await newBlogPost1.save()
        await mrHoangCartoon.blogPosts.push(newBlogPost1)
        await mrHoangCartoon.save()        
        const newBlogPost2 = new BlogPost({title: "Toy Story-câu chuyện đồ chơi", 
                            content: "Đây là phim hoạt hình của Pixar, hình ảnh đẹp", 
                            date: Date.now(), author: mrHoangCartoon._id})
        await newBlogPost2.save()
        await mrHoangCartoon.blogPosts.push(newBlogPost2)
        await mrHoangCartoon.save()        
        const newBlogPost3 = new BlogPost({title: "Frozen-nữ hoàng băng giá", 
                            content: "Nữ hoàng Elsa sử dụng phép thuật để tạo nên tòa lâu đài băng giá trên núi", 
                            date: Date.now(), author: mrHoangCartoon._id})
        await newBlogPost3.save()
        await mrHoangCartoon.blogPosts.push(newBlogPost3)
        await mrHoangCartoon.save()        
        const newBlogPost4 = new BlogPost({title: "Tangled (2010)", 
                            content: "Điểm nhấn của Tangled là cảnh Rapunzel và Flynn dưới bầu trời đêm rực sáng",
                            date: Date.now(), author: mrHoangCartoon._id})
        await newBlogPost4.save()
        await mrHoangCartoon.blogPosts.push(newBlogPost4)
        await mrHoangCartoon.save()        
        const newBlogPost5 = new BlogPost({title: "Up 2009. Hai ông cháu", 
                            content: "Khán giả dễ bị choáng ngợp bởi ngôi nhà bóng bay rực rỡ vút cao trên bầu trời xanh", 
                            date: Date.now(), author: mrHoangCartoon._id})
        await newBlogPost5.save()
        await mrHoangCartoon.blogPosts.push(newBlogPost5)
        await mrHoangCartoon.save()        

          
        console.log(`Tạo thành công danh sách User và BlogPost`) 

    } catch(error) {
        console.log(`Ko tạo được các bản ghi.Error: ${error}`)
    } 
}
module.exports = {
    insertUser, 
    deleteAllUsers,
    findUserById,
    findSomeUsers,
    updateUser,
    deleteUser,
    createSomeUsersAndPosts
}
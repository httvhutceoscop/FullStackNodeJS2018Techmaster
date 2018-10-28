/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 */
const {
    insertUser,
    deleteAllUsers, 
    findUserById,
    findSomeUsers,
    updateUser,
    deleteUser
} = require('./database/userController')
// insertUser('Hoang', 30, 'sunlight4d@gmail.com')
// insertUser('Alex', 28, 'alex123@yahoo.com')
// insertUser('Leanne Graham', 23, 'Sincere@april.biz')
// insertUser('Ervin Howell', 24, 'Shanna@melissa.tv')
// insertUser('Clementine Bauch', 35, 'Nathan@yesenia.net')
// insertUser('Patricia Lebsack', 34, 'Julianne.OConner@kory.org')
// insertUser('Chelsey Dietrich', 33, 'Lucio_Hettinger@annie.ca')
// insertUser('Dennis Schulist', 31, 'Karley_Dach@jasper.info')
// insertUser('Kurtis Weissnat', 32, 'Telly.Hoeger@billy.biz')
// insertUser('Nicholas Runolfsdottir', 22, 'Sherwood@rosamond.me')
// insertUser('Glenna Reichert', 21, 'Chaim_McDermott@dana.io')
// insertUser('Clementina DuBuque', 20, 'Rey.Padberg@karina.biz')
//Thử insert 1 bản ghi "lỗi":
//insertUser('Alex Err', 29, 'alex123yahoo.com')
// deleteAllUsers()
//findUserById("5bd44a74be67e7038f40ab67") //id lấy ở đâu ?
// findSomeUsers()
//db.users.find({"_id":ObjectId("5bd3e6b92f03f403910d0c25")})
//updateUser('5bd3e6b92f03f403910d0c25', 'Leanne Graham 3', 'Sincere3@april.biz',25)
//updateUser('5bd3e6b92f03f403910d0c2f', 'Leanne Graham 2', 'Sincere2@april.biz',24)//Update một bản ghi ko có
deleteUser("5bd3e6b92f03f403910d0c25")
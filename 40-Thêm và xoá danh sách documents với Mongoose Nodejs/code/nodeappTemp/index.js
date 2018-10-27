/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 */

const {insertUser,deleteAllUsers, findSomeUsers} = require('./database/userController.js')
insertUser('Hoang', 30, 'sunlight4d@gmail.com')
insertUser('Alex', 28, 'alex123@yahoo.com')
//insertUser('Alex Err', 29, 'alex123yahoo.com')
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

//deleteAllUsers()
findSomeUsers()
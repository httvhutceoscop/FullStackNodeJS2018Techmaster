/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Phương thức static, Singleton pattern trong Javascript
 */
const Calculation = require('./Calculation')
const Database = require('./Database')
//Khởi tạo đối tượng Database
let database1 = Database.sharedInstance()
let database2 = Database.sharedInstance()
console.log(`Tổng của 1 và 2 là : ${Calculation.sum2Numbers(1,2)}`)
database1.name = 'My DB'
console.log(`database1 = ${JSON.stringify(database1)}`)
console.log(`database2 = ${JSON.stringify(database2)}`)
//database1 và database2 cùng trỏ đến 1 vùng nhớ chứa object của class Database
// => 1 class Database => tạo ra duy nhất 1 object = Singleton Pattern
//Singleton Pattern rất hay dùng với kết nối DB !
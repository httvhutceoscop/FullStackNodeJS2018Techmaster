/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Định nghĩa class, tạo object từ class, kế thừa
 */
const Person = require('./Person')
const Student = require('./Student')

//Khởi tạo đối tượng
let person = new Person('123', "Hoang", 1979)
console.log(`person = ${JSON.stringify(person)}`)
person.speak('How are you ?')
let student = new Student('567', "John", 1998, "Information Technology")
console.log(`student = ${JSON.stringify(student)}`)
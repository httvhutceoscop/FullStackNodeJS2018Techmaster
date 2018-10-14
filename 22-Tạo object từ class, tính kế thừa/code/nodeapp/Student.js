/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 class Student - Mỗi class nên chứa trong 1 file .js
 */
//Lớp Student kế thừa từ Person
const Person = require('./Person')

class Student extends Person {
    constructor(id, name, yearOfBirth, fieldOfStudy) {
        super(id, name, yearOfBirth)
        console.log('This is Student\'s constructor')
        this.fieldOfStudy = fieldOfStudy
    }
}
module.exports = Student //export class Student để các file js khác có thể gọi

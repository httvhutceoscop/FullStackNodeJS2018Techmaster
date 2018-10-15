/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 class Person - Mỗi class nên chứa trong 1 file .js
 */
class Person {
    constructor(id, name, yearOfBirth) {
        //Hàm khởi tạo, gọi ngay khi khởi tạo đối tượng
        console.log('This is Person\'s constructor')
        this.id = id
        this.name = name
        this.yearOfBirth = yearOfBirth
    }
    //Phương thức = function = method
    speak(message) {
        console.log(`I say : \"${message}\"`)
    }
}
module.exports = Person //biến Person thành "public"=> File khác có thể gọi
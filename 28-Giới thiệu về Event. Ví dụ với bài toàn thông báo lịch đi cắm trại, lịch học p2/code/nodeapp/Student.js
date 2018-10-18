/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 class Student
 */
const {EVENT_NEW_COURSE} = require('./eventNames')
const myEmitter = require('./MyEmitter')

class Student {
    constructor(name) {
        this.name = name     
        //Student lắng nghe sự kiện "Khoá học mới"
        myEmitter.on(EVENT_NEW_COURSE, (params) => {
            console.log(`${this.name} đã nhận đc thông báo khoá học mới.
                        Nội dung: ${JSON.stringify(params)}`)
        })   
    }
}
module.exports = Student
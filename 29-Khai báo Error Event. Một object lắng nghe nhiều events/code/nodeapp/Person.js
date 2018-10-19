/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 class Person
 */
const {EVENT_GO_CAMPING, EVENT_NEW_COURSE} = require('./eventNames')
const myEmitter = require('./MyEmitter')

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        //Person lắng nghe sự kiện "Go Camping"
        myEmitter.on(EVENT_GO_CAMPING, (params) => {
            //params = object từ phía sự kiện gửi đến
            console.log(`${this.name} đã nhận được thông báo đi cắm trại.
                        Nội dung: ${JSON.stringify(params)}`)
            
        })
        //Person cũng muốn lắng nghe 'lịch học' ?
        myEmitter.on(EVENT_NEW_COURSE, (params) => {
            console.log(`${this.name} đã nhận đc thông báo khoá học mới.
                        Nội dung: ${JSON.stringify(params)}`)
        })   
    }
}
module.exports = Person
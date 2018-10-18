/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Giới thiệu về Event. Ví dụ với bài toàn thông báo lịch đi cắm trại, lịch học
 */
//Bài toán: Thông báo sự kiện "đi cắm trại" cho các person "Hoàng"+"Jenny"
//Báo sự kiện "có khóa học mới" cho các đối tượng student "Jessica", "John"
const myEmiter = require('./MyEmitter')
const Person = require('./Person')
const Student = require('./Student')

const {EVENT_GO_CAMPING, EVENT_NEW_COURSE} = require('./eventNames')
let person1 = new Person('Hoàng', 30)
let person2 = new Person('Jenny', 31)
//students
let student1 = new Student('Jessica')
let student2 = new Student('John')

//Thông báo lịch đi cắm trại cho person1 và person2 
myEmiter.emit(EVENT_GO_CAMPING, {
    //Đây là "params"
    place: 'Ba Vì, Hà Tây',
    date: '19-10-2018'
})
//Thông báo lịch khoá học mới cho student1 và student2
myEmiter.emit(EVENT_NEW_COURSE, {
    couseName: 'Khoá học React Native',
    date: '30-10-2018'
})

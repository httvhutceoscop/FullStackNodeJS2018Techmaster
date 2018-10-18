/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 class MyEmitter
 */
const EventEmitter = require('events')
class MyEmitter extends EventEmitter {
    constructor() {
        super()
    }
}
const myEmitter = new MyEmitter()
module.exports = myEmitter
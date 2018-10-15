/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 class Database, chứa các function liên quan đến cơ sở dữ liệu(DB)
 */
let instance = null
class Database {
    constructor(name) {
        if(!instance) {
            instance = this
            this.name = name
        }
        return instance//Singleton Pattern = "1 class - 1 object" trong cả App
    }
    static sharedInstance() {
        //Phương thức này sẽ khởi tạo 1 lần
        return new Database('This is a test DB')
    }
}
module.exports = Database

/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 */
var x = 100 //var = variable
console.log('Giá trị của x là: '+x)
var a //Giá trị a chưa khởi tạo = undefined
console.log('value of a = '+a)
//Kiểm tra một biến "đã tồn tại chưa?"
if(a === undefined) {
    console.log('a is undefined')
} else {
    console.log('a has value = '+a)
}
//a = null //Nếu là số thì coi như bằng 0
console.log('a value is : ' + a*12) //NaN = Not A Number
if (x === 100) {
    console.log('x is 100')
    var c = 222
    let d = 333 //Phạm vi của d chỉ ở trong khối(block) này    
}
//Phạm vi của c ra tận đây !
console.log('c = '+c)
// console.log('d = '+ d)
const PI = 3.1416 //constant = ko thay đổi được giá trị. Rất hay dùng !
//PI = 4

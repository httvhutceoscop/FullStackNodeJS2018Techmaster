/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Hàm không tên - Arrow function. 
 Các cách viết khác nhau và những trường hợp hay dùng
 */
/*
const add2Numbers = (a, b) => {
    //console.log("Do something") //Phần thân hàm
    return a + b //Phần thân hàm chỉ có 1 dòng => có thể viết gọn ?
}
*/
const add2Numbers = (a, b) => a + b 
console.log(`Tổng 2 số là : ${add2Numbers(5, 2)}`)
//Arrow function "ko có return" => ko trả về giá trị
const sayHello = (name) => {
    console.log("Do something")    
    console.log(`Hello mr ${name}`)
}
sayHello("Bill")
//Sử dụng "arrow function" làm param cho 1 hàm khác ?
/*
setInterval( () => {
        console.log("I say Hello")
    }, 
    1000)//Sau 1000ms thì làm việc X đều đặn
*/
//Bài toán: Cho một mảng arrayA gồm các số nguyên, 
//Tạo arrayB gồm các số nguyên có giá trị gấp đôi số nguyên trong arrayA
let arrayA = [1,2,3,4,5,6,7]
//map = ánh xạ
let arrayB = arrayA.map( x => 2 * x)
console.log(`arrayA = ${arrayA}`)
console.log(`arrayB = ${arrayB}`)

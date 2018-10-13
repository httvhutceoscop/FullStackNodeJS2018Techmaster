/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Hàm - function, default và rest parameters. Biến trỏ tới hàm
 */
//Hàm có trả về giá trị
function square(x) { //"x" gọi là tham số đầu vào = parameter = param
    return x * x
}
console.log(`Bình phương của 8 là: ${square(8)}`)
//Hàm có params nhận giá trị "mặc định"
function area(width, height = width) {
    return width * height
}
console.log(`Diện tích hình chữ nhật là : ${area(5, 3)}`)//Đầy đủ params
//console.log(`Diện tích hình chữ nhật là : ${area(5)}`)//Chỉ có width
//Hàm có số lượng params "tuỳ ý" => Sử dụng với các hàm có số params ko cố định
function printParams(...ints) {
  console.log(ints.join("-> "))
}
printParams(1,2,3,4)
printParams(1,2,3,4,5,6)
//Hàm không trả về giá trị = ko có return
//Biến trỏ đến 1 hàm
const sayHello = function (name) {
    console.log(`Hello ${name}`)
}
sayHello("Tommy")

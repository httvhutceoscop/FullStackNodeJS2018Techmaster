/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 */
var str = 'Đây là 1 tring - xâu ký tự'
console.log(str)
//Ghép string - string concatenation
const PI = 3.1416
let message = "Số PI là : " + PI
console.log(message)
//String chứa ký tự đặc biệt ?
console.log("Đây là phim \"Chiến tranh giữa các vì sao\" ")
//Đường dẫn trong Windows
console.log("C:\\Windows")
var stringWithMultiLines = "\
Hello\n\
How are you ?\n\
"
console.log(stringWithMultiLines)
//"String interpolation" hay "String Template"
var name = "Hoang"
var weight = 70
//Grave accent = `
console.log(`Hello mr ${name}, your weight is ${weight} kg`)
console.log(`
String trong này
  Viết gì là hiện nấy

Anh em có thấy ko nào !
`)
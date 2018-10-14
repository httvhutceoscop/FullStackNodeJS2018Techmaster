/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Hàm không tên - Arrow function. 
 Định nghĩa Object, các kỹ thuật destructing, parameter context,...
 */
//Định nghĩa 1 đối tượng - object
var resolution = {
    width: 1080,
    height: 720, //Thuộc tính = property = "trường"
    name: "Full HD"
}
//Giả sử width, height là các biến được tính toán trước đó
let width = 1080
let height = 720
let resolution2 = {
    width,
    height,
    name: "Full HD"
}
console.log(`resolution = ${JSON.stringify(resolution)}`)
console.log(`resolution2 = ${JSON.stringify(resolution2)}`)
let person = {
    name: 'Hoang',
    age: 30,
    email: 'sunlight4d@gmail.com',
    //Thuộc tính có thể là 1 tring
    'tên đầy đủ': 'Nguyễn Đức Hoàng',
    //Phương thức: method, function
    registerACourse: (courseName) => {
        console.log(`Tôi đăng ký khoá ${courseName}`)
    },
    //Cách viết mới, ngắn gọn hơn => nên dùng
    buyACar(carName) {
        console.log(`Tôi mua 1 con ${carName}`)
    },
    //Cách viết cũ, hạn chế dùng
    sayHello: function (friendName) {
        console.log(`Chào bạn ${friendName}`)
    },
    //Phương thức sử dụng "parameter context"
    tellAStory({storyName}) {
        console.log(`Tôi kể chuyện \"${storyName}\"`)
    }
}
person.registerACourse('Nodejs')
person.buyACar("Mazda 8")
person.sayHello('Helen')
console.log(`Fullname = ${person['tên đầy đủ']}`)
//Destructing assignment = Trích xuất 1 hoặc nhiều thuộc tính từ object
let {name, age, firstName = ''} = person 
console.log(`name = ${name}, age = ${age}, firstName = ${firstName}`)
//Trích xuất đồng thời đổi tên thuộc tính
let {name: ten, age: tuoi} = person
console.log(`ten = ${ten}, tuoi = ${tuoi}`)
person.tellAStory({storyName: 'Nàng công chúa ngủ trong rừng'})
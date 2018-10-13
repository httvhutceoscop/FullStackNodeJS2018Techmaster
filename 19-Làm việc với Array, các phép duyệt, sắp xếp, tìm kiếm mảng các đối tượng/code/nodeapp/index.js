/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Hàm không tên - Arrow function. 
 Làm việc với Array, các phép duyệt, sắp xếp, tìm kiếm mảng các đối tượng
 */
let colors = ['red', 'green', 'blue', 'yellow']//Mảng các string 
//Duyệt một mảng: cách truyền thống
for(let i = 0; i < colors.length; i++) {
    console.log(`1. color is : ${colors[i]}`)
}
//Duyệt mảng bằng forEach, tốc độ nhanh hơn vì ko phải tính colors.length
colors.forEach(color => {
    console.log(`2. color is : ${color}`)
})
//Mảng các đối tượng(objects)
var famousPersons = [
    {
        id: 0,
        name: "Steve Jobs",
        yearOfBirth: 1955
    },{
        id: 1,
        name: "Abraham Lincoln",
        yearOfBirth: 1809
    },{
        id: 2,
        name: "Bill Gates",
        yearOfBirth: 1955
    },{
        id: 3,
        name: "Martin Luther King",
        yearOfBirth: 1929
    },{
        id: 4,
        name: "Thomas Edison",
        yearOfBirth: 1847
    }    
]
//Thêm một đối tượng mới vào mảng đã có 
/*
famousPersons.push({
    id: 5,
    name: "Jeff Bezos",
    yearOfBirth: 1964
})*/
//Tạo một mảng mới giống hệt famousPersons, thêm 1 đối tượng vào mảng này - concat
var famousPersons2 = famousPersons.concat({
    id: 5,
    name: "Jeff Bezos",
    yearOfBirth: 1964
})
console.log(`famousPersons = ${JSON.stringify(famousPersons)}\n`)
console.log(`famousPersons2 = ${JSON.stringify(famousPersons2)}\n`)
//Sắp xếp dữ liệu
//Sắp xếp theo năm sinh
//famousPersons.sort( (person1, person2) => person1.yearOfBirth < person2.yearOfBirth)
//Sắp xếp theo tên (alphabet)
famousPersons.sort( (person1, person2) => person1.name > person2.name)
console.log(`famousPersons sau khi sắp xếp = ${JSON.stringify(famousPersons)}\n`)
//Lọc = tìm kiếm dữ liệu = filter
//Tìm những người sinh từ năm 1929 trở đi
//let filteredPersons = famousPersons.filter(person => person.yearOfBirth >= 1929)
//Nếu ko tìm thấy thì sao ?
let filteredPersons = famousPersons.filter(person => person.yearOfBirth >= 1980)
console.log(`famousPersons sau khi filter = ${JSON.stringify(filteredPersons)}\n`)
if (filteredPersons.length === 0) {
    console.log('Ko tìm thấy người có năm sinh sau 1980')
}
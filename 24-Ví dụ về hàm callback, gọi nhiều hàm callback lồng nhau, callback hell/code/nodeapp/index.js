/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Ví dụ về hàm callback, gọi nhiều hàm callback lồng nhau, callback hell
 */
//Giả sử chúng ta có các công việc 1, 2, 3,... có các hàm tương ứng để thực hiện
const doTask1 = (name, callback) => {
    //Giả sử việc này mất 1s = 1000ms để hoàn thành
    setTimeout(() => {
        //Giả sử việc này luôn thành công(phần có error sẽ nói sau)
        console.log(`1.Hoàn thành việc ${name}`)     
        //callback() //Callback ko có param
        callback({a: 1, b: 2}) //callback có param
    }, 1000)
}
//Việc 2 
const doTask2 = (name, callback) => {
    //Giả sử việc này mất 2s = 2000ms để hoàn thành
    setTimeout(() => {        
        console.log(`2.Hoàn thành việc ${name}`)             
        callback({a: 11, b: 22}) //callback có param
    }, 2000)
}
/*
console.log('Bắt đầu task1')
doTask1('Nấu cơm', (result) => {
    console.log('Nấu cơm xong')
    console.log(`Kết quả: ${JSON.stringify(result)}`)
})
console.log('Bắt đầu task2')
doTask2('Luộc rau', (result) => {
    console.log('Luộc rau xong')
    console.log(`Kết quả: ${JSON.stringify(result)}`)
})
*/
//Kết luận: 2 task 1,2 bắt đầu cùng 1 thời điểm, ko đợi chờ nhau
//Dùng trong những trường hợp cần chạy song song nhiều việc
//Bài toán 2: Giờ có 2 việc: "Đun nước sôi", xong mới "luộc rau"
console.log('Bắt đầu đun nước')
doTask1('Đun nước', (result) => {
    console.log('Đun nước xong')
    console.log(`Kết quả: ${JSON.stringify(result)}`)
    doTask2("Luộc rau", (result2) => {
        console.log('Luộc rau xong')
        console.log(`Kết quả: ${JSON.stringify(result2)}`)
        //Nếu có task3,4,5,....thì sao ? => callback hell => hạn chế 
        //
    })
})
/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Ví dụ về hàm callback, gọi nhiều hàm callback lồng nhau, callback hell
 */
//Giả sử chúng ta có các công việc 1, 2, 3,... có các hàm tương ứng để thực hiện
const doTask1 = (name, callback) => {
    //Giả sử việc này mất 1s = 1000ms để hoàn thành
    setTimeout(() => {
        console.log(`1.Hoàn thành việc ${name}`)     
        //trường hợp có lỗi: 
        if (name === 'Lái máy bay') {
            callback("Ko thực hiện được, lỗi A", null) //callback có param
        } else {
            callback(null, {a: 1, b: 2})
        }
        
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
/*
console.log('Bắt đầu đun nước')
doTask1('Lái máy bay', (error, result) => {
    console.log('Lái máy bay xong')
    if(error) {
        console.log(`Ko làm được, Error = ${error}`)
        //Lỗi thì ko làm doTask2 nữa !
    } else {
        console.log(`Kết quả: ${JSON.stringify(result)}`)
        doTask2("Luộc rau", (result2) => {
            console.log('Luộc rau xong')
            console.log(`Kết quả: ${JSON.stringify(result2)}`)
            //Nếu có task3,4,5,....thì sao ? => callback hell => hạn chế 
            //Chúng ta sẽ giải quyết bài toán "callback hell" trong các bài tiếp theo
        })
    }
    
})
*/
//Promise
const doTaskA = (taskName) => {
    return new Promise((resolve, reject) => {
        //Resolve = hàm callback khi nhiệm vụ thành công
        //Reject = hàm callback khi nhiệm vụ failed
        setTimeout(() => {
            //Giả sử công việc làm mất 1 giây = 1000ms
            console.log('Kết thúc taskA')
            if(taskName === 'Lái máy bay') {
                reject('Không thực hiện được, ko đủ năng lực')
            } else {
                resolve({a: 1, b: 2})
            }
        }, 1000)
    })
}
const doTaskB = (taskName) => {
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            //Giả sử công việc làm mất 2 giây = 2000ms
            console.log('Kết thúc taskB')
            resolve({a: 11, b: 22})
        }, 2000)
    })
}
console.log('Chuẩn bị làm taskA')
/*
doTaskA('Lái máy bay').then((result) => {
    console.log(`Successful. Result = ${JSON.stringify(result)}`)
}).catch((error) => {
    console.log(`Error: ${error}`)
})
console.log('Chuẩn bị làm Task khác')
*/
//Giờ muốn thực hiện liên hoàn: (việc A, xong đến B) = async
async function doSomeTasks(taskName1, taskName2) {
    try {
        await doTaskA(taskName1)
        await doTaskB(taskName2)
    } catch (error) {
        //Thu hết lỗi của doTaskA và doTaskB vào một chỗ
        console.log(`Error = ${error}`)
    }
}
//Gọi hàm 
//doSomeTasks('Đun nước sôi', 'Luộc rau')
doSomeTasks('Lái máy bay', 'Luộc rau')
//show collections
// db.products.insertOne({
//     name: 'iphone X',
//     quantity: 120,
//     size: {width: 2.79, height:5.65,unit:'inch'}
// })
//Kiểu string có chứa ký tự đặc biệt:
// db.products.insertOne({
//     name:'Jonny\'s iphone 6 plus',
//     quantity:112,
//     size: {width: 2.79, height: 5.65, unit: 'inch'}
// })
//Thêm nhiều "documents"
// db.products.insertMany([{
//     name: 'iphone XS',
//     quantity: 130,
//     type: 'A',
//     size: {width: 2.79, height: 5.65, unit: 'inch'}
// },{
//     name: 'track pad',
//     quantity: 80,
//     type: 'B',    
//     size: {width: 16, height: 9, unit: 'cm'}
// },{
//     name: 'Table Lamp',
//     quantity: 30,
//     type: 'C',
//     size: {width: 5, height: 12, unit: 'inch'}
// },{
//     name: 'notebook',
//     quantity: 90,
//     type: 'D',
//     size: {width: 9, height: 11, unit: 'cm'}
// },{
//     name: 'notebook 2',
//     quantity: 100,
//     type: 'D',
//     size: {width: 9, height: 11, unit: 'cm'}
// }
// ]) 

// db.products.find({})
// db.products.count()
// db.products.find({name:'iphone X'})
//Tìm những document có chứa chữ "phone"
// db.products.find({name:/phone/}).count()
//Tìm những document có "name" bắt đầu bằng chữ "note"
// db.products.find({name:/^note/})
//db.products.find({name: /book$/}) //tên kết thúc bằng chữ "book"
//Tìm những product có quantity = 90 VÀ type = 'D'
// db.products.find({quantity: 90, type:'D'}) //AND
//Tìm những product có quantity = 90 HOẶC type = 'D'
//db.products.find({$or: [{quantity: 90}, {type:'D'}]}) //or = hoặc
//Nhiều điều kiện hoặc($or) => sử dụng $in
//Tìm những documents có quantity = 130, 90, hoặc 100
//db.products.find({quantity: {$in: [130, 90, 100]}})
//Cập nhật - update một document trong 1 collection

// db.products.updateOne(
//     {name: "iphone XS"}, //điều kiện
//     {
//         $set: {quantity: 131, "size.width":2.78},//Giá trị mới,
//         $currentDate:{lastModified:true}//Cập nhật gía trị lastModified thành ngày giờ hiện tại
//     } 
// )
// Cập nhật theo trường _id
// db.products.updateOne(
//     {_id:ObjectId("5bcfc676f1423b7bc210f492")},
//     {
//         $set:{name:"notebook 3",quantity:101},
//         $currentDate:{lastModified:true}
//     }
// )
// Cập nhật 1 document, nếu ko tìm thấy thì tạo mới ?
// db.products.updateOne(
//     {name:"iphone X++"},
//     {
//         $set:{"size.width":3.78, quantity:151},
//         $currentDate:{lastModified:true}
//     },{
//         upsert:true //Tự tạo object mới nếu ko tìm thấy "iphone X++"
//     }
// )
//Cập nhật nhiều bản ghi
// db.products.updateMany(
//     {quantity:{$gt:110}}, //gt = greater than, gt3 = greater than or equal
//     {
//         $set: {type: "D"},
//         $currentDate:{lastModified:true}
//     }
// )
//Thay thế một document
// db.products.replaceOne(
//     {name: "iphone X"},
//     {name: "iphone X1", quantity: 121,size:{width:2.80,height:5.66,unit:"inch"}} //Document mới
// )
// 
//Xoá 1 document trong Collection
db.products.deleteOne({name:"iphone X1"})


























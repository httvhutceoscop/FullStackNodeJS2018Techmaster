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
//db.products.deleteOne({name:"iphone X1"})
//Giờ chúng ta có 2 collections: categories và products
//Quan hệ giữa 2 collection này: 1 - n => 1 category chứa "nhiều products"
// db.categories.drop()
// db.products.drop()
// db.categories.insertMany([{
//     name: 'Electronics',
//     description: "Đây là danh mục các đồ điện tử",    
// },{
//     name: 'Housewares',
//     description: "Danh mục các đồ gia dụng. VD: điều hoà, tủ lạnh",    
// },{
//     name: 'School supplies',
//     description: "Văn phòng phẩm, đồ dùng học tập",    
// },{
//     name: 'Fashion',
//     description: "Thời trang, quần áo, giày dép",    
// }
// ]) 
// db.categories.find({}).count()
// db.products.insertMany([{
//     name: 'iphone XS',
//     quantity: 130,
//     type: 'A',
//     category: 'Electronics',
//     size: {width: 2.79, height: 5.65, unit: 'inch'}
// },{
//     name: 'track pad',
//     quantity: 80,
//     type: 'B',    
//     category: 'Electronics',
//     size: {width: 16, height: 9, unit: 'cm'}
// },{
//     name: 'Table Lamp',
//     quantity: 30,
//     type: 'C',
//     category: 'Housewares',
//     size: {width: 5, height: 12, unit: 'inch'}
// },{
//     name: 'notebook', 
//     quantity: 90,
//     type: 'D',
//     category: 'School supplies',
//     size: {width: 9, height: 11, unit: 'cm'}
// },{
//     name: 'notebook 2',
//     quantity: 100,
//     type: 'D',
//     category: 'School supplies',
//     size: {width: 9, height: 11, unit: 'cm'}
// },{
//     name: 'Bộ đồ cực cool cotton cho bé từ 1-5 tuổi',
//     quantity: 12,
//     type: 'D',
//     category: 'Fashion',
//     size: {width: 12, height: 5, unit: 'cm'}
// },{
//     name: 'Quần Túi Hộp Kiểu Lính Qh68',
//     quantity: 5,
//     type: 'A',
//     category: 'Fashion',
//     size: {width: 12, height: 5, unit: 'cm'}
// },{
//     name: 'Tủ lạnh 2 ngăn GN-D315PS',
//     quantity: 34,
//     type: 'B',
//     category: 'Housewares',
//     size: {width: 51, height: 11, unit: 'inch'}
// },{
//     name: 'Máy hút bụi LG VC4420NHTPY',
//     quantity: 34,
//     type: 'C',
//     category: 'Housewares',
//     size: {width: 12, height: 3, unit: 'inch'}
// },{
//     name: 'Quần Short Kaki Mài, Loang Các Mầu',
//     quantity: 13,
//     type: 'D',
//     category: 'Fashion',
//     size: {width: 30, height: 150, unit: 'cm'}
// },{
//     name: 'Bộ phần mềm văn phòng Microsoft Office',
//     quantity: 23,
//     type: 'D',
//     category: 'Software',
//     size: {width: 30, height: 150, unit: 'cm'}
// }
// ])
// db.products.find({}).count()
//Sử dụng phép join 2 collections để tạo ra một collection có:
//Thông tin products, kèm thông tin CHI TIẾT từng category
// db.products.aggregate([
//     {
//         $lookup: {
//             from: "categories",
//             localField: "category",//field của "products"
//             foreignField: "name",//field của categories
//             as: "category_doc"
//         }
//     }, //Chúng ta muốn "phẳng hoá" trường category_doc ?
//     {
//         $unwind: "$category_doc" //Phẳng hoá
//     }, //Chúng ta muốn thêm điều kiện : chỉ lấy các doc có quantity >= 100
//     {
//         $match:{quantity: {$gte: 100}}
//     }, 
//     {
//         $project : { "category_doc._id": 0, "category_doc.name":0 } //0 = exclude = "ko hiện"
//     }
// ]) //aggregate = "tổng hợp" 1 hoặc nhiều collection => 1 collection khác
//Giờ chúng ta join 2 collection theo chiều ngược lại:
//Hiện danh sách categories, có trường products_doc danh sách chi tiết các products
db.categories.aggregate([
    {
     $lookup:
       {
         from: "products",
         localField: "name",//field của "categories"
         foreignField: "category",//field của products
         as: "products_doc"
       }
  },{
      $match: { "products_doc": { $ne: [] } }
   },{ 
      $project : { 
          "products_doc._id": 0, 
          "products_doc.size":0,
          "products_doc.category":0,
       } 
   }
])





















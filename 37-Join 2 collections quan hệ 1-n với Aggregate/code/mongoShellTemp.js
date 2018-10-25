db.products.drop()
db.products.insertMany([{
    name: 'iphone XS',
    quantity: 130,
    type: 'A',
    category: 'Electronics',
    size: {width: 2.79, height: 5.65, unit: 'inch'}
},{
    name: 'track pad',
    quantity: 80,
    type: 'B',    
    category: 'Electronics',
    size: {width: 16, height: 9, unit: 'cm'}
},{
    name: 'Table Lamp',
    quantity: 30,
    type: 'C',
    category: 'Housewares',
    size: {width: 5, height: 12, unit: 'inch'}
},{
    name: 'notebook', 
    quantity: 90,
    type: 'D',
    category: 'School supplies',
    size: {width: 9, height: 11, unit: 'cm'}
},{
    name: 'notebook 2',
    quantity: 100,
    type: 'D',
    category: 'School supplies',
    size: {width: 9, height: 11, unit: 'cm'}
},{
    name: 'Bộ đồ cực cool cotton cho bé từ 1-5 tuổi',
    quantity: 12,
    type: 'D',
    category: 'Fashion',
    size: {width: 12, height: 5, unit: 'cm'}
},{
    name: 'Quần Túi Hộp Kiểu Lính Qh68',
    quantity: 5,
    type: 'A',
    category: 'Fashion',
    size: {width: 12, height: 5, unit: 'cm'}
},{
    name: 'Tủ lạnh 2 ngăn GN-D315PS',
    quantity: 34,
    type: 'B',
    category: 'Housewares',
    size: {width: 51, height: 11, unit: 'inch'}
},{
    name: 'Máy hút bụi LG VC4420NHTPY',
    quantity: 34,
    type: 'C',
    category: 'Housewares',
    size: {width: 12, height: 3, unit: 'inch'}
},{
    name: 'Quần Short Kaki Mài, Loang Các Mầu',
    quantity: 13,
    type: 'D',
    category: 'Fashion',
    size: {width: 30, height: 150, unit: 'cm'}
},{
    name: 'Bộ phần mềm văn phòng Microsoft Office',
    quantity: 23,
    type: 'D',
    category: 'Software',
    size: {width: 30, height: 150, unit: 'cm'}
}
]) 
//Aggregation Pipeline
//Liệt kê các sản phẩm loại A
db.products.aggregate([{$match: {type: "A"}}])
db.products.aggregate([{$match: {type: "A"}}]).count()
//Tính tổng số các sản phẩm loại A, B, C, D
db.products.aggregate([    
    {$group: {_id: "$type", totalQuantity: {$sum: "$quantity"}}}
])
//Categories collection
db.categories.insertMany([{
    name: 'Electronics',
    description: "Đây là danh mục các đồ điện tử",    
},{
    name: 'Housewares',
    description: "Danh mục các đồ gia dụng. VD: điều hoà, tủ lạnh",    
},{
    name: 'School supplies',
    description: "Văn phòng phẩm, đồ dùng học tập",    
},{
    name: 'Fashion',
    description: "Thời trang, quần áo, giày dép",    
}
]) 
//1 category có n products
db.products.aggregate([
    {
     $lookup:
       {
         from: "categories",
         localField: "category",//field của "products"
         foreignField: "name",//field của categories
         as: "category_doc"
       }
  },{
      $match: { "category_doc": { $ne: [] } }
   },{
      $unwind: "$category_doc" //Phẳng hoá
   },{ 
      $project : { "category_doc._id": 0, "category_doc.name":0 } 
   }
])

db.categories.aggregate([
    {
     $lookup:
       {
         from: "products",
         localField: "name",//field của "products"
         foreignField: "category",//field của categories
         as: "products_doc"
       }
  },{
      $match: { "products_doc": { $ne: [] } }
   },{ 
      $project : { "products_doc._id": 0, "products_doc.size":0 } 
   }
])




















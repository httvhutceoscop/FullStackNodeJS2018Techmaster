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
}
]) 
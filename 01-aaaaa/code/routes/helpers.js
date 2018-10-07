/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
const convertEpochDateToString = (epochDate) => {
    var date = new Date(epochDate)
    return date.toLocaleString('vi-VN')
}
const convertFarenheitToCelcius = (fDegree) => {
    return (fDegree -32) * 5 / 9
}


module.exports = {
    convertEpochDateToString,
    convertFarenheitToCelcius
}

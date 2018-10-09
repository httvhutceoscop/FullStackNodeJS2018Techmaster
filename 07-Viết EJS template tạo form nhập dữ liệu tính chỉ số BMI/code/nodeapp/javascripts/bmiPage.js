/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
"Javascript-jquery phía client"
*/
const serverName = '127.0.0.1'
const serverPort = '8080'

$(document).ready((event) => {
    $("#btn-calculate-bmi").click((event) => {     
        event.preventDefault()   //Ko cho phép xoá form sau khi bấm button
        const name = $("#name").val()
        const weight = parseFloat($("#weight").val())
        const height = parseFloat($("#height").val()) / 100  //meters  
        const urlString = `http://${serverName}:${serverPort}/users/bmi?name=${name}&weight=${weight}&height=${height}`
        //Gửi request tới server
        $.ajax({
            url: urlString,
            type: 'GET',   //Giống như gửi từ Firefox, Chrome,...        
            success: (response) => {
                //alert(`response = ${JSON.stringify(response)}`)
                //$('#bmi-value').val(response.message)                
                $('#bmi-value').val(response.data)                
            },
            error: (error) => {
                alert(error);
            }
        })
    })
})
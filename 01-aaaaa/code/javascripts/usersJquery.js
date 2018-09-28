/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
const serverName = '127.0.0.1'
const serverPort = '8080'

$(document).ready((event) => {
    $("#btn-calculate-bmi").click((event) => {        
        //event.preventDefault();
        const $this = $(event.currentTarget);                 
        const name = $("#name").text()
        const weight = parseFloat($("#weight").text())
        const height = parseFloat($("#height").text()) / 100    
        const urlString = `http://${serverName}:${serverPort}/users/bmi?name=${name}&weight=${weight}&height=${height}`
        $.ajax({
            url: urlString,
            type: 'GET',
            //data: { name, weight, height } ,
            //contentType: 'application/json; charset=utf-8',
            success: (response) => {
                alert(JSON.stringify(response));
            },
            error: (error) => {
                alert(error);
            }
        })
    });
});

/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
const serverName = '127.0.0.1'
const serverPort = '8080'

$(document).ready((event) => {    
    // alert("aa")
    
    $.getScript("javascripts/jquerySettings", function(){

        alert("Script loaded but not necessarily executed.");
     
     });
    $("#btn-add-task").click((event) => {                
        const $this = $(event.currentTarget);                 
        const taskTitle = $("#taskTitle").val()
        const done = $("#password").val()        
        const urlString = `http://${serverName}:${serverPort}/tasks`        
        $.ajax({
            url: urlString,
            type: 'POST',
            data: { name, password } ,
            //contentType: 'application/json; charset=utf-8',
            success: (response) => {                
                //alert(`res = ${JSON.stringify(response)}`)
                alert(`response.result = ${response.result}`)
                if (response.result === "ok") {
                    window.location.href = urlLoginSuccess
                } else {
                    window.location.href = urlLoginFailed                    
                }                
            },
            error: (error) => {
                window.location.href = urlLoginFailed
            }
        })
    });
});

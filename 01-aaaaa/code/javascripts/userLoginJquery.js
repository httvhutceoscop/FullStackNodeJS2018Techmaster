/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
const serverName = '127.0.0.1'
const serverPort = '8080'

$(document).ready((event) => {
    $("#btn-login").click((event) => {                
        const $this = $(event.currentTarget);                 
        const name = $("#name").val()
        const password = $("#password").val()        
        const urlString = `http://${serverName}:${serverPort}/users/login`
        const urlLoginSuccess = `http://${serverName}:${serverPort}/users/loginSuccess`
        const urlLoginFailed = `http://${serverName}:${serverPort}/users/loginFailed`
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

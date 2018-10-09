/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
$(document).ready((event) => {
    $("#btn-login").click((event) => { 
        const name = $("#name").val()
        const password = $("#password").val()        
        const urlString = `http://${serverName}:${serverPort}/users/login`
        //http://127.0.0.1:8080/users/loginFailed
        const urlLoginFailed = `http://${serverName}:${serverPort}/users/loginFailed`
        const urlLoginSuccess = `http://${serverName}:${serverPort}/users/loginSuccess`
        $.ajax({
            url: urlString,
            type: 'POST',
            data: { name, password } ,            
            success: (response) => {                
                //alert(`res = ${JSON.stringify(response)}`)
                if(response.result === 'ok') {
                    //Sang trang Success
                    window.location.href = urlLoginSuccess
                } else {
                    //Sang trang Failed
                    window.location.href = urlLoginFailed                    
                }
            },
            error: (error) => {
                //Sang trang Failed
                window.location.href = urlLoginFailed
            }
        })
    })
})
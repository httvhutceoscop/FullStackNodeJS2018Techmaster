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
    $("#btn-login").click((event) => {                
        const urlString = `http://${serverName}:${serverPort}/userLogin`        
        window.location.href = urlString        
    });
});

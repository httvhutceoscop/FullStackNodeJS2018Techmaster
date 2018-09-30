/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
const serverName = '127.0.0.1'
const serverPort = '8080'


$(document).ready((event) => {    
    $('#mp3File').fileupload({
        dataType: 'json',
        add: function (e, data) {
            alert("chao33")
        },
        done: function (e, data) {
            alert("chao")
            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo(document.body);
            });
        },
        progressall: function (e, data) {
            alert("chao22")
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .bar').css(
                'width',
                progress + '%'
            );
        }
    })    
    $("#btn-upload").click((event) => {                        
        const urlString = `http://${serverName}:${serverPort}/files/uploads`       
        $.ajax({
            url: urlString,
            type: 'POST',
            data: { name, password } ,
            //contentType: 'application/json; charset=utf-8',
            success: (response) => {                
                //alert(`res = ${JSON.stringify(response)}`)                
            },
            error: (error) => {
                
            }
        })
    });
})

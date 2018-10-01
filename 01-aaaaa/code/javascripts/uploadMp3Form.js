/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
const serverName = '127.0.0.1'
const serverPort = '8080'

let fileObjects = []
$(document).ready((event) => {
    $(document).on('change', "#mp3File", () => {        
        fileObjects = document.getElementById("mp3File").files[0]
        fileObjects.forEach(fileObject => {
            
        });
        
        const fileExtension = fileObject.name.split('.').pop()
        if (["mp3"].indexOf(fileExtension.toLowerCase()) < 0) {
            
        }
    })

    $("#btn-upload").click((event) => {
        const urlString = `http://${serverName}:${serverPort}/files/uploads`
        let formData = new FormData()
        formData.append("file", fileObject)

        $.ajax({
            url: urlString,
            method: 'POST',
            data: formData,
            beforeSend: () => {

            },
            success: (response) => {
                //alert(`res = ${JSON.stringify(response)}`)                
                fileObject = null
            },
            error: (error) => {

            },
            cache: false,
            contentType: false,
            processData: false
        })
    });
})

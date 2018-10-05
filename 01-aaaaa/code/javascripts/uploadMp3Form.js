/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
const serverName = '127.0.0.1'
const serverPort = '8080'

let fileObjects = []
$(document).ready((event) => {
    $(document).on('change', "#mp3File", () => {
        fileObjects = document.getElementById("mp3File").files
        $.each(fileObjects, (key, fileObject) => {
            const fileExtension = fileObject.name.split('.').pop()
            if (["mp3"].indexOf(fileExtension.toLowerCase()) < 0) {
                $("#labelWarning").text("You must select mp3 files")
                fileObjects = []
                return
            }
        })
        $("#labelWarning").text(`You selected ${fileObjects.length} files`)
    })

    $("#btn-upload").click((event) => {
        const urlString = `http://${serverName}:${serverPort}/files/uploads`
        if (fileObjects.length == 0) {
            $("#labelWarning").text("You must choose at least 1 mp3 file")
        }
        let formData = new FormData()
        var i = 0
        $.each(fileObjects, (key, fileObject) => {
            formData.append(`file${i}`, fileObject)
            i = i + 1
        });
        $.ajax({
            url: urlString,
            method: 'POST',
            data: formData,
            beforeSend: () => {

            },
            success: (response) => {
                //alert(`res = ${JSON.stringify(response)}`)
                fileObjects = []
                $("#labelWarning").text("")
                const urlUploadMp3Form = `http://${serverName}:${serverPort}/files/uploadMp3Form`
                window.location.href = urlUploadMp3Form
            },
            error: (error) => {
                $("#labelWarning").text(`Error uploading file: ${error}`)
            },
            cache: false,
            contentType: false,
            processData: false
        })
    });
})

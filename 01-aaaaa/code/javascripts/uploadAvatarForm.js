/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
const serverName = '127.0.0.1'
const serverPort = '8080'

let fileObjects = []
$(document).ready((event) => {    
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4',                
        format: 'dd-mm-yyyy',
        icons: {
            rightIcon: '<i class="material-icons">date_range</i>'
        },
        close: (e) => {
            //alert('Close is fired.')
        },
        createDoneHandler: (e) => {
            alert('record with id=' + e.data.id + ' is clicked.')
        },        
    });
    $('#datepicker')
})

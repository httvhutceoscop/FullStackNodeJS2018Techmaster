/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()
const path = require('path')
const fs = require('fs')//fs = file system
const promisify = require('util').promisify //Thư viện này có sẵn trong Nodejs
const readdir = promisify(fs.readdir) //Hàm này lấy các file/folder trong thư mục
const lstat = promisify(fs.lstat) //lstat = "list status"

router.get('/', async (req, res) => {    
    try {
        const currentFolder = path.join(__dirname)
        const files = await readdir(currentFolder)       
        let numberOfFolders = 0
        let numberOfFiles = 0
        let i = 0
        let content = ""
        if(files.length === 0) {
            content = `<p>This folder: ${currentFolder} is empty</p>`
            res.send(content)
            return
        }
        files.forEach(async (file) => {
            const stat = await lstat(`${currentFolder}/${file}`)
            if (stat.isFile()) {
                numberOfFiles = numberOfFiles + 1
            } else {
                numberOfFolders = numberOfFolders + 1
            }
            content = `${content}<li><a href="">${i + 1}. ${file}</a></li>`
            if (i === files.length - 1) {
                //Phần tử cuối trong mảng
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                content = `${content}<p>There are ${numberOfFiles} files and ${numberOfFolders} folders</p>`
                res.send(content)
                return
            }
            i = i + 1
        })
    } catch(error) {
        res.send(`Error when reading files in Folder: ${error}`)
    }
})
const verifyFileExtensions = async (files) => {
    const keys = await Object.keys(files)
    for(let i = 0; i < keys.length; i++) {
        const key = keys[i]
        const fileObject = files[key]
        const fileExtension = fileObject.name.split('.').pop()
        //Chỉ cho phép upload một số "extensions" nào đó ? 
        let fileExceed = fileObject.truncated === true //File vượt quá 0.5 MB
        if (["png", "jpg", "jpeg", "gif", "mp3"].indexOf(fileExtension.toLowerCase()) < 0 
                || fileExceed) {
            return false
        }            
    }
    return true
}
//Upload multiple files
router.post('/uploads', async (req, res) => {
    //Dữ liệu files đc lưu tại : req.files    
    try {
        if(!req.files) {
            res.json({
                result: "failed",
                message: "Cannot find files to upload"
            })
            return
        }
        const keys = Object.keys(req.files)
        if (keys.length === 0) {
            res.json({
                result: "failed",
                message: "Cannot find files to upload"
            })
            return
        }
        //Chỉ cho phép upload một số "extensions" nào đó ?      
        const verifyExtensions = await verifyFileExtensions(req.files)      
        if(verifyExtensions === false) {
            res.json({
                result: "failed",
                message: `You can only upload png, jpg, gif, jpeg files, or fileSize > 0.5MB !`
            })
            return
        }
        keys.forEach( async (key) => {
            const fileName = `${Math.random().toString(36)}`
            const fileObject = await req.files[key]
            const fileExtension = fileObject.name.split('.').pop()
            const destination = `${path.join(__dirname, '..')}/uploads/${fileName}.${fileExtension}`            
            let error = await fileObject.mv(destination) //mv = move 
            if (error) {
                res.json({
                    result: "failed",
                    message: `Cannot upload files. Error: ${error}`
                })
                return
            }
            //Kiểm tra file cuối cùng trong list ?
            if (key === keys[keys.length - 1]) {
                res.json({
                    result: "ok",
                    message: `Upload files successfully`,
                    numberOfFiles: keys.length
                })
            }
        })
    } catch(error) {
        res.json({
            result: "failed",
            message: `Cannot upload files. Error: ${error}`
        })
    }
})

module.exports = router

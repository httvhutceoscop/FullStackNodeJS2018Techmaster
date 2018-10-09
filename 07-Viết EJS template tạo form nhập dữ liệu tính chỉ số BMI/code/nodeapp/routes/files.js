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
module.exports = router

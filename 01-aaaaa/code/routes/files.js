/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()
var path = require('path')
const fs = require('fs')
const promisify = require('util').promisify
const readdir = promisify(fs.readdir)
//lstat - Get file status
const lstat = promisify(fs.lstat)

router.get('/', async (req, res) => {
    try {
        const currentFolder = path.join(__dirname)
        const files = await readdir(currentFolder)
        let numberOfFolders = 0
        let numberOfFiles = 0
        let i = 0
        let content = ""
        files.forEach(async (file) => {            
            const stat = await lstat(`${currentFolder}/${file}`);
            if (stat.isFile()) {
                numberOfFiles = numberOfFiles + 1
            } else {
                numberOfFolders = numberOfFolders + 1
            }
            console.log(file)
            content = `${content}<li><a href="">${i+1}. ${file}</a></li>`
            if (i === files.length - 1) {
                //Phần tử cuối trong List            
                //console.log(`There are ${numberOfFiles} files and ${numberOfFolders} folders`)                        
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                content = `${content}<p>There are ${numberOfFiles} files and ${numberOfFolders} folders</p>`
                res.send(content)
            }
            i = i + 1            
        })

    } catch (e) {
        console.log('e', e);
    }
})
module.exports = router

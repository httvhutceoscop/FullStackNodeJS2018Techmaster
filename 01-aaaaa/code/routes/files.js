/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()
const path = require('path')
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
            content = `${content}<li><a href="">${i + 1}. ${file}</a></li>`
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
//upload 1 file
router.post('/upload', async (req, res) => {
    if (!req.files) {
        res.json({
            result: "failed",
            message: "Ko tìm thấy file để upload"
        })
    }
    const { file1 } = req.files
    debugger
    const fileName = `${Math.random().toString(36)}`
    const destination = `${path.join(__dirname, '..')}/uploads/${fileName}.png`
    try {
        let error = await file1.mv(destination)
        if (error) {
            res.json({
                result: "failed",
                message: `Cannot upload file. Error: ${error}`
            })
            return
        }
        res.json({
            result: "ok",
            message: `Upload thành công`
        })
    } catch (e) {
        console.log('e', e)
    }
})
router.post('/uploadMultiple', async (req, res) => {
    if (!req.files) {
        res.json({
            result: "failed",
            message: "Ko tìm thấy file để upload"
        })
    }
    try {        
        const keys = Object.keys(req.files)                        
        keys.forEach(async (key) => {            
            const fileName = `${Math.random().toString(36)}`
            const destination = `${path.join(__dirname, '..')}/uploads/${fileName}.png`
            debugger
            let error = await req.files[key].mv(destination)
            if (error) {
                res.json({
                    result: "failed",
                    message: `Cannot upload files. Error: ${error}`
                })
                return
            }
            
            //last file in the list
            if (key === keys[keys.length - 1]) {
                res.json({
                    result: "ok",
                    message: `Upload thành công`
                })
            }            
        })
    } catch (e) {
        console.log('e', e)
    }
})

module.exports = router


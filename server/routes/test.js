// const express = require('express');
// const router = express.Router();
// const path = require('path');
// const user = require('../models/user');
// const formidable = require('formidable');
// const login = require('../middlewares/login')

// router.get('/get', function(req, res) {
//     //console.log(req.headers.authorization);
//     res.json({
//         name: 'Tom',
//         age: 20
//     })
// })



// router.post('/json', function(req, res) {
//     res.json({
//         status: 200,
//         message: "数据提交成功json"
//     })

// })
// router.post('/', function(req, res) {
//             //提交的数据保存到数据库
//             //req.body
//             const form = new formidable.IncomingForm();
//             form.keepExtensions = true;
//             form.uploadDir = path.join(__dirname, "../", "uploads");
//             form.parse(req, function(err, fields, files) {
//                 if (err) throw err;
//                 var obj = {
//                     ...fields,
//                     touxiang: "/" + path.basename(files.pic.path)
//                 }
//                 console.log(obj);
//                 const userInstance = new user(obj);
//                 userInstance.save(function(err) {
//                     if (err) {
//                         res.json({
//                             status: 600,
//                             message: "提注册失败"
//                         })
//                     } else {
//                         res.json({
//                             status: 200,
//                             message: "注册成功"
//                         })
//                     }
//                 })
//             })

//             // router.post('/img', function(req, res) {
//             //     console.log(req.headers['content-type']);
//             //     const form = new formidable.IncomingForm();
//             //     form.keepExtensions = true;
//             //     form.uploadDir = path.join(__dirname, "../", "uploads");
//             //     form.parse(req, function(err, fields, files) {
//             //         if (err) throw err;
//             //         var obj = {
//             //             ...fields,
//             //             pic: "/" + path.basename(files.pic.path)
//             //         }
//             //         console.log(obj);
//             //         res.json({
//             //             status: 200,
//             //             message: "注册提交成功"
//             //         })
//             //     })
//             // })


//             module.exports = router;
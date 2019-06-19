const express = require('express');
const router = express.Router();
const path = require('path');
const user = require('../models/user');
const formidable = require('formidable');
// router.post('/', function(req, res) {
//     //提交的数据保存到数据库
//     //req.body
//     const userInstance = new user(req.body);
//     userInstance.save(function(err) {
//         if (err) {
//             res.json({
//                 status: 600,
//                 message: "提交数据失败"
//             })
//         } else {
//             res.json({
//                 status: 200,
//                 message: "提交数据成功"
//             })
//         }
//     })
// })

router.post('/', function(req, res) {
    //提交的数据保存到数据库
    //req.body
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, "../", "uploads");
    form.parse(req, function(err, fields, files) {
        if (err) throw err;
        var obj = {
            ...fields,
            touxiang: "/" + path.basename(files.pic.path)
        }
        console.log(obj);
        const userInstance = new user(obj);
        userInstance.save(function(err) {
            if (err) {
                res.json({
                    status: 600,
                    message: "注册失败"
                })
            } else {
                res.json({
                    status: 200,
                    message: "注册成功"
                })
            }
        })
    })

})




module.exports = router;
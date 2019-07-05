const express = require('express');
const router = express.Router();
const path = require('path');
const user = require('../models/user');
const md5 = require('md5');
const formidable = require('formidable');


router.post('/', function(req, res) {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, "../", "uploads");
    form.parse(req, function(err, fields, files) {
        if (err) throw err;
        user.find({
            username: fields.username,
        }, function(err, result) {
            if (err) throw err;
            if (result.length) { //数据库注册用户重复
                res.json({
                    status: 600,
                    message: "用户名已存在"
                })
            } else { //数据库无重名则可写入
                var obj = {
                    ...fields,
                    touxiang: "/" + path.basename(files.pic.path),
                    password: md5(fields.password)
                }
                console.log(obj);
                const userInstance = new user(obj);
                userInstance.save(function(err) {
                    if (err) {
                        res.json({
                            status: 500,
                            message: "注册失败"
                        })
                    } else {
                        res.json({
                            status: 200,
                            message: "注册成功"
                        })
                    }
                })


            }
        })

    })

})




module.exports = router;
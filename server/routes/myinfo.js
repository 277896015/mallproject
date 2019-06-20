const express = require('express');
const router = express.Router();
const user = require('../models/user');
const md5 = require('md5');
const formidable = require('formidable');
const path = require('path');



router.post("/", function(req, res) {

    //数据库匹配数据
    console.log(req.body.userid)


    user.find({
        _id: req.body.userid
    }, function(err, results) {
        if (err) throw err;

        if (results.length) { //匹配成功

            res.json({
                status: 200,
                results: results[0],
            })

        } else { //匹配不成功重定向到登录
            console.log("找不到此用户");
            res.json({
                status: 500,
                message: "用户不存在或密码不正确"
            })

        }

    })


})
router.post("/update", function(req, res) {


    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, "../", "uploads");

    console.log(fields)


    user.find({
        _id: fields.userid
    }, function(err, results) {
        if (err) throw err;

        if (results.length) { //匹配成功

            res.json({
                status: 200,
                results: results[0],
            })

        } else { //匹配不成功重定向到登录
            console.log("找不到此用户");
            res.json({
                status: 500,
                message: "用户不存在"
            })

        }

    })


})


module.exports = router;
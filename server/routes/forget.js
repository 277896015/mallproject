const express = require('express');
const router = express.Router();
const user = require('../models/user');
const md5 = require('md5');

const path = require('path');
router.post("/", function(req, res) {
    //数据库匹配数据
    console.log(req.body.username)
    user.find({
        username: req.body.username,
        registercode: req.body.registercode
    }, function(err, results) {
        if (err) throw err;

        if (results.length) { //匹配成功

            var obj = {
                password: md5(req.body.password)
            }

            user.findByIdAndUpdate(results[0]._id, obj, function(err) {
                if (err) throw err;
                console.log("找回成功");
                res.json({
                    status: 200,
                    message: "成功，可用新密码登录"
                })

            })

        } else { //匹配不成功重定向到登录
            console.log("找不到此用户");
            res.json({
                status: 500,
                message: "用户不存在或注册码错误"
            })

        }

    })


})


module.exports = router;
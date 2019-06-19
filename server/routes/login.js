const express = require('express');
const router = express.Router();
const user = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config')

router.post("/", function(req, res) {
    //数据库匹配数据
    user.find({
        username: req.body.username,
        password: req.body.password,


    }, function(err, result) {
        if (err) throw err;

        if (result.length) { //匹配成功
            // console.log(result);
            const token = jwt.sign({ //生成token
                username: req.body.username //需要加密的数据
            }, config.secret, { //加密签名
                expiresIn: 30 //过期时间
            })
            console.log(token);
            res.json({
                status: 200,
                message: "登录成功",
                token: token
            })

        } else { //匹配不成功重定向到登录
            res.json({
                status: 600,
                message: "登陆失败"
            })

        }
    })

    // user.find(req.body).exec(function(err, result) {
    //     if (err) {
    //         res.json({
    //             status: 600,
    //             message: "登陆失败"
    //         })
    //     } else {
    //         // console.log(result);
    //         const token = jwt.sign({ //生成token
    //             username: req.body.username //需要加密的数据
    //         }, config.secret, { //加密签名
    //             expiresIn: 30 //过期时间
    //         })
    //         console.log(token);
    //         res.json({
    //             status: 200,
    //             message: "登录成功",
    //             token: token
    //         })
    //     }

    // })
})








module.exports = router;
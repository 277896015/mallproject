const express = require('express');
const router = express.Router();
const user = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config')
const md5 = require('md5');

router.post("/", function(req, res) {
    //数据库匹配数据
    user.find({
        username: req.body.username,
        password: md5(req.body.password)


    }, function(err, result) {
        if (err) throw err;

        if (result.length) { //匹配成功

            const token = jwt.sign({ //生成token
                username: req.body.username //需要加密的数据
            }, config.secret, { //加密签名
                expiresIn: 60 * 10 //过期时间
            })

            res.json({
                status: 200,
                message: "登录成功",
                userid: result[0]._id,
                token: token
            })

        } else { //匹配不成功重定向到登录
            res.json({
                status: 500,
                message: "用户不存在或密码不正确"
            })

        }
    })

})


module.exports = router;
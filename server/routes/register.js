const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.post('/', function (req, res) {
    //提交的数据保存到数据库
    //req.body
    const userInstance = new user(req.body);
    userInstance.save(function (err) {
        if (err) {
            res.json({
                status: 600,
                message: "提交数据失败"
            })
        } else {
            res.json({
                status: 200,
                message: "提交数据成功"
            })
        }
    })
})







module.exports = router;
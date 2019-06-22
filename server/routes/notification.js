const express = require('express');
const router = express.Router();
const notification = require('../models/notification');

const path = require('path');

router.get("/", function(req, res) {
    console.log("进入消息通知路由")
        //数据库匹配数据

    notification.find({ read: 0 }, function(err, results) {
        if (err) throw err;

        if (results.length) { //匹配成功
            console.log('消息通知如下');
            res.json({
                status: 200,
                results: results,
            })

        } else {
            console.log("找不到");
            res.json({
                status: 500,
                message: "没有消息通知"
            })

        }

    })


})
router.get("/know", function(req, res) {
    console.log("拿到id" + req.query.id)
    console.log("进入了解通知路由")


    //数据库匹配数据

    notification.find({
        _id: req.query.id
    }, function(err, results) {
        if (err) throw err;
        console.log(req.query.id)
        if (results.length) { //匹配成功
            console.log('找到了此条通知');
            var newinfo = results[0];
            newinfo.read = 1;
            notification.findByIdAndUpdate(results[0]._id, newinfo, function(err) {
                if (err) throw err;
                console.log("已读成功");
                res.json({
                    status: 200,
                    message: "已读"
                })

            })
        } else {
            console.log("找不到此通知");
            res.json({
                status: 500,
                message: "通知不存在"
            })

        }

    })


})


module.exports = router;
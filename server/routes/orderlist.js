const express = require('express');
const router = express.Router();
const order = require('../models/order');
const path = require('path');

router.post("/", function(req, res) {
    console.log("进入order 的post路由")
        //数据库匹配数据
    console.log(req.body)


    const orderInstance = new order(req.body);
    orderInstance.save(function(err) {
        if (err) {
            res.json({
                status: 500,
                message: "下单失败"
            })
        } else {
            res.json({
                status: 200,
                message: "下单成功"
            })
        }
    })

})

router.get("/", function(req, res) {
    console.log("进入订单列表路由")
        //数据库匹配数据
    console.log(req.query.id)

    order.find({ xiadanrenid: req.query.id }, function(err, results) {
        if (err) throw err;

        if (results.length) { //匹配成功
            console.log('收藏如下');
            res.json({
                status: 200,
                results: results,
            })

        } else {
            console.log("找不到");
            res.json({
                status: 500,
                message: "没有收藏"
            })

        }

    })


})

module.exports = router;
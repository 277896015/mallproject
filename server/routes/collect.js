const express = require('express');
const router = express.Router();
const collect = require('../models/collect');

const path = require('path');
router.post("/add/", function(req, res) {
    console.log("进入新增收藏路由")
        //数据库匹配数据
    console.log(req.body)
    collect.find({
        scrid: req.body.scrid,
        productid: req.body.productid



    }, function(err, results) {
        if (results.length) {
            res.json({
                status: 500,
                message: "不能重复收藏"
            })
        } else {
            const collectInstance = new collect(req.body);
            collectInstance.save(function(err) {
                if (err) {
                    res.json({
                        status: 500,
                        message: "收藏失败"
                    })
                } else {
                    res.json({
                        status: 200,
                        message: "收藏成功"
                    })
                }
            })

        }

    })



})

router.get("/", function(req, res) {
    console.log("进入收藏列表路由")
        //数据库匹配数据
    console.log(req.query.id)

    collect.find({ scrid: req.query.id }, function(err, results) {
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



router.get("/quxiao", function(req, res) {
    console.log("拿到id" + req.query.id)
    console.log("进入取消收藏路由")


    //数据库匹配数据
    collect.findByIdAndRemove(req.query.id, function(err) {
        if (err) {
            res.json({
                status: 500,
                message: "取消收藏失败"
            })
        } else {


            console.log("取消成功");
            res.json({
                status: 200,
                message: "取消收藏成功"
            })
        }
    })


})


module.exports = router;
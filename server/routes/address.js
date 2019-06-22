const express = require('express');
const router = express.Router();
const address = require('../models/address');

const path = require('path');

router.get("/", function(req, res) {
    console.log("进入get路由")
    console.log(req.query.id)

    //数据库匹配数据

    address.find({
        shrid: req.query.id

    }, function(err, results) {
        if (err) throw err;

        if (results.length) { //匹配成功
            console.log('收获地址如下');
            res.json({
                status: 200,
                results: results,
            })

        } else {
            console.log("找不到");
            res.json({
                status: 500,
                message: "没有收货地址"
            })

        }

    })


})
router.get("/deleted/", function(req, res) {
    console.log("进入delete路由")
    console.log(req.query.id)
    address.findByIdAndRemove(req.query.id, function(err) {
        if (err) throw err;
        console.log("数据库删除成功");
        res.json({
            status: 200,
            message: "删除成功"
        })
    })


})
router.get("/updatelist/", function(req, res) {
    console.log("进入updated路由")
    console.log(req.query.id)
    address.find({
        _id: req.query.id

    }, function(err, results) {
        if (err) throw err;

        if (results.length) { //匹配成功
            console.log('当前地址');
            res.json({
                status: 200,
                results: results[0],
            })

        } else {
            console.log("找不到");
            res.json({
                status: 500,
                message: "找不到当前地址"
            })

        }

    })


})


router.post("/", function(req, res) {
    console.log("进入post路由")
        //数据库匹配数据
    console.log(req.body.shrid)
    var obj = {
        shrid: req.body.shrid,
        shrname: req.body.shrname,
        phone: req.body.phone,
        dizhi: req.body.dizhi

    }
    console.log(obj);
    const addressInstance = new address(obj);
    addressInstance.save(function(err) {
        if (err) {
            res.json({
                status: 500,
                message: "新增失败"
            })
        } else {
            res.json({
                status: 200,
                message: "新增成功"
            })
        }
    })

})
router.post("/update/", function(req, res) {
    console.log("进入更新路由")
        //数据库匹配数据
    console.log(req.body.shrid)
    var obj = {
        shrid: req.body.shrid,
        shrname: req.body.shrname,
        phone: req.body.phone,
        dizhi: req.body.dizhi

    }
    address.findByIdAndUpdate(req.body._id, obj, function(err) {
        if (err) {
            res.json({
                status: 500,
                message: "更新失败"
            })
        } else {


            console.log("更新成功");

            res.json({
                status: 200,
                message: "更新成功"
            })
        }
    })




})


module.exports = router;
const express = require('express');
const router = express.Router();
const product = require('../models/product');

const path = require('path');

router.get("/", function(req, res) {
    console.log("进入查询详情路由")
    console.log("拿到id:" + req.query.id)

    console.log("进入查询详情路由")


    //数据库匹配数据

    product.find({
        $or: [ //多条件，数组形式  同时模糊搜索名字或分类或描述
            { title: new RegExp(req.query.id) },
            { sorts: new RegExp(req.query.id) },
            { description: new RegExp(req.query.id) }

        ]
    }, function(err, results) {
        if (err) throw err;
        console.log(req.query.id)
        if (results.length) { //匹配成功
            console.log('找到了');
            res.json({
                status: 200,
                results: results,
            })

        } else {
            console.log("找不到");
            res.json({
                status: 500,
                message: "搜索结果不存在"
            })

        }

    })


})


module.exports = router;
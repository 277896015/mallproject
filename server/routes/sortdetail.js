const express = require('express');
const router = express.Router();
const product = require('../models/product');

const path = require('path');

router.get("/", function(req, res) {
    console.log("拿到id:" + req.query.id)

    console.log("进入商品详情路由")


    //数据库匹配数据

    product.find({
        "sorts": req.query.id
    }, function(err, results) {
        if (err) throw err;
        console.log(req.query.id)
        if (results.length) { //匹配成功
            console.log('找到了分类');
            res.json({
                status: 200,
                results: results,
            })

        } else {
            console.log("找不到此分类");
            res.json({
                status: 500,
                message: "分类不存在"
            })

        }

    })


})


module.exports = router;
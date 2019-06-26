const express = require('express');
const router = express.Router();
const product = require('../models/product');

const path = require('path');


router.get('/list', function(req, res) {
    //获取数据库数据
    product.find({}, function(err, results) {
        if (err) throw err;
        console.log(results);
        //res.render('list', { arr: results })
        res.json({
            status: 200,
            results: results,
        })
    })
})

router.get("/", function(req, res) {
    console.log("拿到id" + req.query.id)
    console.log("进入商品详情路由")


    //数据库匹配数据

    product.find({
        _id: req.query.id
    }, function(err, results) {
        if (err) throw err;
        console.log(req.query.id)
        if (results.length) { //匹配成功
            console.log('找到了商品');
            res.json({
                status: 200,
                results: results[0],
            })

        } else {
            console.log("找不到此商品");
            res.json({
                status: 500,
                message: "商品不存在"
            })

        }

    })


})
router.get("/buy", function(req, res) {
    console.log("拿到id" + req.query.id)
    console.log("进入buy路由")


    //数据库匹配数据

    product.find({
        _id: req.query.id
    }, function(err, results) {
        if (err) throw err;
        console.log(req.query.id)
        if (results.length) { //匹配成功
            console.log('找到了商品');
            res.json({
                status: 200,
                results: results,
            })

        } else {
            console.log("找不到此商品");
            res.json({
                status: 500,
                message: "商品不存在"
            })

        }

    })


})


module.exports = router;
const express = require('express');
const router = express.Router();
const user = require('../models/user');
const md5 = require('md5');
const formidable = require('formidable');
const path = require('path');



router.post("/", function(req, res) {

    //数据库匹配数据
    console.log(req.body.userid)


    user.find({
        _id: req.body.userid
    }, function(err, results) {
        if (err) throw err;

        if (results.length) { //匹配成功

            res.json({
                status: 200,
                results: results[0],
            })

        } else { //匹配不成功重定向到登录
            console.log("找不到此用户");
            res.json({
                status: 500,
                message: "用户不存在或密码不正确"
            })

        }

    })


})
router.post("/update", function(req, res) {

        console.log("进入路由update")
        console.log("解析数据")
        const form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.uploadDir = path.join(__dirname, "../", "uploads");
        form.parse(req, function(err, fields, files) {
            if (err) throw err;

            user.find({
                _id: fields.userid,



            }, function(err, result) {
                if (err) throw err;

                if (result.length) { //查到数据
                    //组装新数据

                    if (fields.password == "") {


                        console.log("如果没改密码");
                        var objs = fields;
                        delete objs.password;
                        console.log(objs);
                        var obj = {
                            ...objs,
                            touxiang: "/" + path.basename(files.pic.path),
                        }
                        console.log(obj);
                        user.find({ username: fields.username }, function(err, result) {
                            if (err) throw err;
                            if (result.length) {
                                if (result[0]._id == fields.userid) {
                                    user.findByIdAndUpdate(fields.userid, obj, function(err) {
                                        if (err) throw err;
                                        console.log("更新成功");
                                        res.json({
                                            status: 200,
                                            message: "成功"
                                        })

                                    })
                                } else {
                                    res.json({
                                        status: 500,
                                        message: "用户名重复"
                                    })
                                }

                            } else {
                                user.findByIdAndUpdate(fields.userid, obj, function(err) {
                                    if (err) throw err;
                                    console.log("更新成功");
                                    res.json({
                                        status: 200,
                                        message: "成功"
                                    })

                                })
                            }


                        })

                    } else {
                        console.log("如果改密码");
                        var objs = fields;
                        var obj = {
                            ...objs,
                            password: md5(fields.password),
                            touxiang: "/" + path.basename(files.pic.path),

                        }
                        console.log(obj);
                        user.find({ username: fields.username }, function(err, result) {
                            if (err) throw err;
                            if (result.length) {
                                if (result[0]._id == fields.userid) {
                                    user.findByIdAndUpdate(fields.userid, obj, function(err) {
                                        if (err) throw err;
                                        console.log("更新成功");
                                        res.json({
                                            status: 200,
                                            message: "成功"
                                        })

                                    })
                                } else {
                                    res.json({
                                        status: 500,
                                        message: "用户名重复"
                                    })
                                }

                            } else {
                                user.findByIdAndUpdate(fields.userid, obj, function(err) {
                                    if (err) throw err;
                                    console.log("更新成功");
                                    res.json({
                                        status: 200,
                                        message: "成功"
                                    })

                                })
                            }


                        })

                    }

                } else { //
                    res.json({
                        status: 500,
                        message: "失败"
                    })



                }
            })

        })

    })
    //没有图片更新的路由
router.post("/picnoupdate", function(req, res) {

    console.log("进入路由picnoupdate")

    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, "../", "uploads");
    form.parse(req, function(err, fields, files) {
        if (err) throw err;
        user.find({
            _id: fields.userid,
        }, function(err, result) {
            if (err) throw err;

            if (result.length) { //数据库查到数据


                if (fields.password == "") {


                    console.log("如果没改密码");
                    var objs = fields;
                    delete objs.password;

                    var obj = {
                        ...objs,
                    }
                    console.log(fields.username);
                    user.find({ username: fields.username }, function(err, result) {
                        if (err) throw err;
                        if (result.length) {
                            if (result[0]._id == fields.userid) {
                                user.findByIdAndUpdate(fields.userid, obj, function(err) {
                                    if (err) throw err;
                                    console.log("更新成功");
                                    res.json({
                                        status: 200,
                                        message: "成功"
                                    })

                                })
                            } else {
                                res.json({
                                    status: 500,
                                    message: "用户名重复"
                                })
                            }

                        } else {
                            user.findByIdAndUpdate(fields.userid, obj, function(err) {
                                if (err) throw err;
                                console.log("更新成功");
                                res.json({
                                    status: 200,
                                    message: "成功"
                                })

                            })
                        }


                    })

                } else {
                    console.log("如果改密码");

                    var obj = {
                        ...fields,
                        password: md5(fields.password)
                    }
                    console.log(obj);
                    user.find({ username: fields.username }, function(err, result) {
                        if (err) throw err;
                        if (result.length) {
                            if (result[0]._id == fields.userid) {
                                user.findByIdAndUpdate(fields.userid, obj, function(err) {
                                    if (err) throw err;
                                    console.log("更新成功");
                                    res.json({
                                        status: 200,
                                        message: "成功"
                                    })

                                })
                            } else {
                                res.json({
                                    status: 500,
                                    message: "用户名重复"
                                })
                            }

                        } else {
                            user.findByIdAndUpdate(fields.userid, obj, function(err) {
                                if (err) throw err;
                                console.log("更新成功");
                                res.json({
                                    status: 200,
                                    message: "成功"
                                })

                            })
                        }


                    })



                }
            } else { //
                res.json({
                    status: 500,
                    message: "失败"
                })



            }
        })

    })

})


module.exports = router;
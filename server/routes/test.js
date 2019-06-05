const express = require('express');
const router = express.Router();
const path = require('path');
const formidable = require('formidable');
const login=require('../middlewares/login')

router.get('/get', function (req, res) {
    //console.log(req.headers.authorization);
    res.json({
        name: 'Tom',
        age: 20
    })
})



router.post('/json', function (req, res) {
    res.json({
        status: 200,
        message: "数据提交成功json"
    })

})

router.post('/img', function (req, res) {
    console.log(req.headers['content-type']);
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, "../", "uploads");
    form.parse(req, function (err, fields, files) {
        if (err) throw err;
        var obj = {
            ...fields,
            pic: "/" + path.basename(files.pic.path)
        }
        console.log(obj);
        res.json({
            status: 200,
            message: "数据提交成功"
        })
    })
})


module.exports = router;
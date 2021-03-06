const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(path.join(__dirname, "public"))); //静态文件处理
app.use(express.static(path.join(__dirname, "uploads"))); //静态文件处理

//解析post数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

//链接数据库
mongoose.connect("mongodb://localhost/app", {
    useNewUrlParser: true,
    useFindAndModify: false
});
//提示数据库连接成功
const con = mongoose.connection;
con.on('open', function() {
    console.log("数据库连接成功");
})


//设置跨域访问

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


//路由配置
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register'));
app.use('/forget', require('./routes/forget'));
app.use('/add', require('./routes/add'));

app.use('/myinfo', require('./routes/myinfo'));
app.use('/product', require('./routes/product'));
//客户路由
app.use('/itemdetail', require('./routes/itemdetail'));
app.use('/address', require('./routes/address'));
app.use('/sortdetail', require('./routes/sortdetail'));
app.use('/searchdetail', require('./routes/searchdetail'));
app.use('/notification', require('./routes/notification'));
app.use('/collect', require('./routes/collect'));
app.use('/orderpage', require('./routes/orderpage'));




app.use(function(err, req, res, next) {
    res.send('error');

})
app.listen(4000);
module.exports = app;
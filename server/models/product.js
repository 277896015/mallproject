//定义上传商品字段
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    title: { type: String, required: true },
    pic: String,
    price: Number,
    fee: Number,
    description: String,
    sorts: String,
    num: { type: Number, default: 1 },

});

//指定数据库中的存储集合
const product = mongoose.model("product", productSchema);
//暴露模块
module.exports = product;


//module.exports=mongoose.model("product",productSchema);;
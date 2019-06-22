const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collect = new Schema({
    title: String,
    pic: String,
    price: Number,
    fee: Number,
    description: String,
    sorts: String,
    productid: String,
    scrid: String,
})

module.exports = mongoose.model('collect', collect);
// //定义上传商品字段
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const collect = new Schema({
//     title: { type: String, required: true },
//     pic: String,
//     price: Number,
//     fee: Number,
//     description: String,
//     sorts: String

// });

// //指定数据库中的存储集合
// const collect = mongoose.model("collect", collect);
// //暴露模块
// module.exports = collect;


//module.exports=mongoose.model("product",productSchema);;
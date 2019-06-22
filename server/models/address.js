//定义上传商品字段
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const address = new Schema({
//     shrid: { type: String, required: true },
//     shrname: String,
//     phone: String,
//     dizhi: String
// });

// //指定数据库中的存储集合
// const address = mongoose.model("address", address);
// //暴露模块
// module.exports = product;
//module.exports=mongoose.model("product",productSchema);;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const address = new Schema({
    shrid: { type: String, required: true },
    shrname: String,
    phone: String,
    dizhi: String
})

module.exports = mongoose.model('address', address);
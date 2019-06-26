const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order = new Schema({
    xiadanrenid: String,
    shangpin: Array,
    shouhuodizhi: Object,
    totalMoney: Number
})

module.exports = mongoose.model('order', order);
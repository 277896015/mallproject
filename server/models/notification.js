const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notification = new Schema({
    baoti: String,
    content: String,
    read: { type: Number, default: 0 }

})

module.exports = mongoose.model('notification', notification);
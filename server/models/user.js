const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: String,
    password: String,
    email: String,
    registercode: String,
    admin: { type: Number, default: 0 },
    touxiang: String
})

module.exports = mongoose.model('user', user);
const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = function (req, res, next) {
    const authorization = req.headers['authorization'];
    const token = authorization.split(' ')[1];
    console.log(token)
    //检测token是否存在，是否过期
    if (token&&token!='null') {
        jwt.verify(token, config.secret, function (err, result) {
            if (err) {
               
                console.log(err)
                res.json({
                    status: 401,
                    message: "token过期，请重新登录"
                })
            } else {
                console.log(result);
                next();
            }
        })
    }
     else {
        res.json({
            status: 601,
            message: "还没有登录，请登录"
        })
    }
}
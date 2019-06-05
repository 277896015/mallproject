const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        proxy: {
            "/api": { //标志
                target: "http://localhost:4000",
                changeOrigin: true, //跨域请求
                pathRewrite: {
                    '^/api': ""
                }
            }
        }
    },
    chainWebpack: (config) => {
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'))

    }
}
/**
 * 测试环境打包
 */
const merge = require("webpack-merge");
const common =require('./webpack.common.js')
module.exports = merge(
    common,
    {
        mode:'development',
        devtool: 'cheap-module-eval-source-map',
    }
)
/**
 * 生产环境打包
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const UglifyJs = require('uglifyjs-webpack-plugin');
const UglifyCss = require('optimize-css-assets-webpack-plugin');
// 清除文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//非常好用的压缩插件
const CompressionWebpackPlugin = require('compression-webpack-plugin');
console.log('🍎🍎🍎🍎🍎🍎🍎🍎🍎');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      new UglifyJs({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: {
           // warnings: false,
            drop_console: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
          }
        }
      }),
      new UglifyCss(),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/,
        },
        styles: {
          name: 'styles',
          test: /\.(less|css)$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});

// splitChunks: {
//     chunks: "async”,//默认作用于异步chunk，值为all/initial/async/function(chunk),值为function时第一个参数为遍历所有入口chunk时的chunk模块，chunk._modules为chunk所有依赖的模块，通过chunk的名字和所有依赖模块的resource可以自由配置,会抽取所有满足条件chunk的公有模块，以及模块的所有依赖模块，包括css
//     minSize: 30000,  //表示在压缩前的最小模块大小,默认值是30kb
//     minChunks: 1,  // 表示被引用次数，默认为1；
//     maxAsyncRequests: 5,  //所有异步请求不得超过5个
//     maxInitialRequests: 3,  //初始话并行请求不得超过3个
//    automaticNameDelimiter:'~',//名称分隔符，默认是~
//     name: true,  //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔
//     cacheGroups: { //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
//        common: {
//          name: 'common',  //抽取的chunk的名字
//          chunks(chunk) { //同外层的参数配置，覆盖外层的chunks，以chunk为维度进行抽取
//          },
//          test(module, chunks) {  //可以为字符串，正则表达式，函数，以module为维度进行抽取，只要是满足条件的module都会被抽取到该common的chunk中，为函数时第一个参数是遍历到的每一个模块，第二个参数是每一个引用到该模块的chunks数组。自己尝试过程中发现不能提取出css，待进一步验证。
//          },
//         priority: 10,  //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
//        minChunks: 2,  //最少被几个chunk引用
//        reuseExistingChunk: true，//  如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
//        enforce: true  // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的minSize，true：则使用0，false：使用上层minSize
//        }
//     }
// }
//
// chunks: 表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
// minSize: 表示在压缩前的最小模块大小，默认是30kb；
// minChunks: 表示被引用次数，默认为1；
// maxAsyncRequests: 最大的按需(异步)加载次数，默认为1；
// maxInitialRequests: 最大的初始化加载次数，默认为1；
// name: 拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成，如果是true，将自动生成基于块和缓存组键的名称。如果是字符串或函数将允许您使用自定义名称。如果名称与入口点名称匹配，则入口点将被删除。
// automaticNameDelimiter:'',名称分隔符，默认是
// cacheGroups: 缓存组。

// runtimeChunk
// 将包含chunks 映射关系的 list单独从 app.js里提取出来，因为每一个 chunk 的 id 基本都是基于内容 hash 出来的，所以你每次改动都会影响它，如果不将它提取出来的话，等于app.js每次都会改变。缓存就失效了。

//

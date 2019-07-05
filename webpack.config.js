const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'postcss-loader'},
                        {
                            loader: 'less-loader',
                            options: {
                                javascriptEnabled: true,
                                modifyVars: {
                                    'primary-color': '#435c71',
                                    'link-color': '#435c71',
                                    'font-size-base': '12px',
                                    'text-color': 'rgba(0, 0, 0, 0.65)'
                                }
                            }
                        }
                    ]
                })
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        port: 9000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(zh-cn|en-gb)$/),
        new ForkTsCheckerWebpackPlugin(),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: './template/index.html',
            showErrors: true,
            hash: true,
            minify: {
                removeAttributeQuotes: true
            }
        })
    ]
};

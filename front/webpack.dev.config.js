const path = require('path')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
    watch: true,
    cache: true,
    devtool: 'source-map',
    entry:{
        prescript : [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            './src/index.js'
        ]   
    },
    output: {
        path: __dirname +'/build/js',
        filename: '[name].bundle.js', // [name]对应上面entry中的Key
        sourceMapFilename: 'debugging/[file].map', // sourcemap文件名
       
    },
    externals: {
        //"vue": 'Vue',
        //"vue-router": 'VueRouter'
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']  // 这里的需要 npm install babel-preset-xxx 后才能用
                }
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            }, {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                loader: 'url-loader?limit=10000'
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
       new webpack.HotModuleReplacementPlugin(),
       new OpenBrowserPlugin({url: 'http://localhost:8080/index.html'})
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}
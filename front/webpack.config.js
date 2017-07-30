const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry:{
        prescript : './src/index.js'
    },
    output: {
        path: __dirname +'/build/js',
        filename: '[name].bundle.min.js' // [name]对应上面entry中的Key
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({ 
                            fallback: 'vue-style-loader',
                            use: 'css-loader'
                        })
                    }
                }
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
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }, {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                loader: 'url-loader?limit=10000'
            }, {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: '../css/style.css', allChunks: true}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true,
                warnings: false
            }
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};
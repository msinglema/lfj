const gulp = require('gulp')
const path = require('path')
const webpack = require('webpack')
const gutil = require('gulp-util')
const cssmin = require('gulp-minify-css')
const WebpackDevServer = require('webpack-dev-server')
const webpackDevConfig = require('./webpack.dev.config')
const webpackConfig = require('./webpack.config')
const commander = require('commander')

commander.option('-d, --dev','development environment').parse(process.argv)

gulp.task('webpack', () => {
    if(commander.dev){

        var server = new WebpackDevServer(webpack(webpackDevConfig),{
            contentBase: './',
            hot: true,
            inline: true, 
            historyApiFallback: true,
            watchContentBase: true,
            watchOptions: {
                poll: true
            }
        })
        server.listen(8080)
    }else{
        webpack(webpackConfig, function(err, stats) {
            if (err) {
                throw new gutil.PluginError("webpack", err)
            }
            gutil.log("[webpack]", stats.toString({}))
        })
    }
})

gulp.task('cssmin', function () {
    gulp.src('build/css/style.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css/'))
})

gulp.task('default', ['webpack'])
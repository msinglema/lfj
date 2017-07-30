首页，发现，搜索。三个页面采用单页模式：vue + vuex + vue-router

1.nodeJS 环境
2.vue目录下npm install 安装前端开发依赖包
3.webpack.config.dev.js 开发环境webpack配置，包含element-ui, 热加载,JS不压缩，有sourceMap
  webpack.config.js 正式环境webpack配置，打包压缩

4.使用命令 gulp -d 启动开发环境webpack配置。
因为开发环境采用热加载故静态页面中的JS链接路径为内存路径，开发环境样式文件直接通过style打在页面上
build/css/global.css为开发静态文件时整个页面的样式，页面直接链接，也可以分散到各个组件中。

5.开发完成采用命令gulp打包压缩
生成的JS和CSS 会在目录 build/js/xxx.bundle.min.js 和 build/css/style.css(包括elemenet-ui样式和各个组件中的单独样式)
最后可将global.css和style.css 和为一个文件



src:
   components ---页面组件
   pages      ---页面
   router     ---路由配置
   vuex       ---状态管理
   index.js   ---入口


//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '良方集',
    userInfo: {}
  },
  onLoad: function () {
    app._getUserInfo().then((userInfo)=>{
      this.setData({ userInfo })
    })
  }
})

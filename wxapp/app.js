import util from './utils/util.js'

//app.js
App({
  onLaunch: function () {

    wx.checkSession({
      success: ()=>{
        //session 未过期，并且在本生命周期一直有效
        const lfj_sess = wx.getStorageSync('lfj_sess')
        if( lfj_sess ){
          this._getUserInfo()
        } else {
          util.handleLogin()
        }
      },
      fail: ()=>{
        //登录态过期
        util.handleLogin()
      }
    })

  },
  _getUserInfo:function() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  globalData: {
    userInfo: null
  }
})

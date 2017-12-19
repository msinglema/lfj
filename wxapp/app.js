import util from './utils/util.js'

//app.js
App({
  onLaunch: function () {

    wx.checkSession({
      success: ()=>{
        //session 未过期，并且在本生命周期一直有效
        const lfj_sess = wx.getStorageSync('lfj_sess')
        if( !lfj_sess ){
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
    return new Promise((resolve, reject)=>{
      // 获取用户信息
      const userInfoStorage = wx.getStorageSync('userInfo')
      if(!userInfoStorage){
        wx.getSetting({
          success: res => {
            // if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                wx.getUserInfo({
                  success: res => {
                    // 可以将 res 发送给后台解码出 unionId
                    wx.setStorageSync('userInfo', res.userInfo)
                    util.request({ path:'ADD_USER', data:res.userInfo })
                      .then((result) => {
                        console.log('add user ok.')
                      }, (error) => {
                        console.log('[ADD_USER] error: ', error)
                      })
                      resolve(res.userInfo)
                  }
                })
            // }
          }
        }, error =>{
           reject(error)
        })
      } else {
        resolve(userInfoStorage)
      }
    })
  }

})

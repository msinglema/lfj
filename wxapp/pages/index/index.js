//获取应用实例
const app = getApp()

import util from '../../utils/util.js'
const { requestPost } = util
Page({
  data: {

    pi:1,
    ps:10,
    totalpage:0,
    cases:[],

    tabs: ["分享", "问答"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
        }
    });

    this.getData(1)
  },

  // temp
  getData: function(biztypeid){
    const {data:{pi, ps, cases}} = this
    const data = { pi, ps, biztypeid}

    requestPost({path:'GET_PRESCRIPTION', data})
        .then((result)=>{
          const { data:{items, totalpage} } = result
          this.setData({cases:cases.concat(items), totalpage})
        }, (error)=>{
          console.log('error: ', error)
        })
  },

  tabClick: function (e) {
    const id = parseInt(e.currentTarget.id)
    console.log('id: ', id)
    this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: id,
        cases:[]
    })
    this.getData(id+1)
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

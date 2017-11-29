//获取应用实例
const app = getApp()

import util from '../../utils/util.js'
const { request } = util
const sliderWidth = 188; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {

    pi:1,
    ps:10,
    totalpage:0,
    my_cases:[],
    cases:[],

    grids:['其他','儿科', '妇科', '慢病','骨科', '皮肤科','护理','口腔'],
    grids_expand: false,

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
    this.getMyData()
    this.getAllData(0)
  },

  showInput: function () {
      this.setData({
          inputShowed: true
      })
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      })
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      })
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      })
  },

  loadmore: function(e){
    const { data:{pi, totalpage} } = this
    console.log('load more')
    if( pi < totalpage ){
      this.setData({pi:pi+1})
      this.getAllData(0)
    }
  },

  getMyData: function(){
    //bit:0, 代表问答和分享
    const data = { pi:1, ps:1, biz:0 }
    request({path:'GET_PRESCRIPTION', data})
        .then((result)=>{
          const { data:{items} } = result
          this.setData({my_cases:items})
        }, (error)=>{
          console.log('error: ', error)
        })
  },

  // temp
  getAllData: function(biztypeid){
    const {data:{pi, ps, cases}} = this
    const data = { pi, ps, show_all:1, biz:biztypeid }

    request({path:'GET_PRESCRIPTION', data})
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
  toggleExpand: function(e){
    this.setData({grids_expand:!this.data.grids_expand})
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

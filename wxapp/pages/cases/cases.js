const app = getApp()

import util from '../../utils/util.js'
const { request } = util

Page({
  data:{
    pi:1,
    ps:10,
    totalpage:0,
    cases:[]
  },
  formatTime:function(time){
  	return util.formatTime(time);
  },
  onLoad:function(options){
  	const time = util.formatTime(new Date())
  	console.log(time)
    // 页面初始化 options为页面跳转所带来的参数
    console.log(app.globalData.userInfo);
    this.setData({
        userInfo:app.globalData.userInfo
    })
    this.getData()
  },
  getData: function(){
    const {data:{pi, ps, cases}} = this
    const data = {pi, ps}

    request({path:'GET_ARCHIVES', data})
        .then((result)=>{
          const { data:{archives, totalpage} } = result
          this.setData({cases:cases.concat(archives), totalpage})
        }, (error)=>{
          console.log('error: ', error)
        })
  },
  loadmore: function(e){
    const { data:{pi, totalpage} } = this
    if( pi < totalpage ){
      console.log('load more')
      this.setData({pi:pi+1})
      this.getData()
    }
  },
  imagePreview:function(e){
    const { currentTarget:target } = e
    const { dataset:{src, list} } = target

    const urls = list.map((item)=>`https://${item.img_id}`)
    wx.previewImage({
        current: `https://${src}`, // 当前显示图片的http链接
        urls: urls // 需要预览的图片http链接列表
    })
  }
})

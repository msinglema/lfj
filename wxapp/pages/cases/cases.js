const app = getApp()

import util from '../../utils/util.js'
const { scene_map, request } = util

Page({
  data:{
    pi:1,
    ps:10,
    totalpage:0,
    cases:[],
    scene:''
  },
  formatTime:function(time){
  	return util.formatTime(time);
  },
  onLoad:function(options){
    console.log('opts: ', options)
    const { scene } = options
    this.setData({ scene })
    wx.setNavigationBarTitle({
      title: scene_map[scene].title
    })
    // 页面初始化 options为页面跳转所带来的参数
    app._getUserInfo().then((userInfo)=>{
      this.setData({ userInfo })
    })
    this.getData()
  },
  getData: function(){
    const { data: { pi, ps, cases, scene}} = this
    const data = {pi, ps}
    console.log(scene)

    let path
    if (('share' === scene) || ('quiz' === scene)) {
      path = 'GET_PRESCRIPTION'
      data.biz = 'share' === scene ? 1 : 2 //分享：1，问答：2
    } else {
      path = 'GET_ARCHIVES'
    }

    console.log(path)
    request({ path: path, data})
        .then((result)=>{
          const { data: { items, totalpage} } = result
          this.setData({ cases: cases.concat(items), totalpage})
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

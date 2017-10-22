import util from '../../utils/util.js'

const app = getApp()

Page({
  data:{
    pi:1,
    ps:10,
    totalpage:0,
    moments:[]
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
    const {data:{pi, ps, moments}} = this 
    const data = {pi, ps}
    // 页面渲染完成
    wx.request({
      url: util.getAPIPath('GET_ARCHIVES'),
      data: data,
      dataType:'json',
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log('res.data:', res.data)
        const { data } = this
        const { data:{archives, totalpage} } = res.data
        this.setData({moments:moments.concat(archives), totalpage})
      },
      fail: (error) => {
       console.log('error:', error)
      }
    }) 
  },
  loadmore: function(e){
    console.log('load more')
    const { data:{pi, totalpage} } = this
    if( pi < totalpage ){
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
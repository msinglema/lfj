import util from '../../utils/util.js'

const app = getApp()

Page({
  data:{
    moments:[
		// {
		// 	name: 'bryan', avaImg: '../../image/head.jpg', text: '豪车', time:'2017-10-08', 
		// 	img:[
		// 		{imgUrl:'../../image/image_1.jpeg'}, 
		// 		{imgUrl:'../../image/image_2.jpeg'},
		// 		{imgUrl:'../../image/image_3.jpeg'}
		// 	]
		// },
		// {
		// 	name: 'think', avaImg: '../../image/head.jpg', text: '宝马', time:'2017-10-08', 
		// 	img:[
		// 		{imgUrl:'../../image/image_1.jpeg'}, 
		// 		{imgUrl:'../../image/image_2.jpeg'},
		// 		{imgUrl:'../../image/image_3.jpeg'}
		// 	]
		// },
		// {
		// 	name: 'thunder', avaImg: '../../image/head.jpg', text: '宝马', time:'2017-10-08', 
		// 	img:[
		// 		{imgUrl:'../../image/image_1.jpeg'}, 
		// 		{imgUrl:'../../image/image_2.jpeg'},
		// 		{imgUrl:'../../image/image_3.jpeg'}
		// 	]
		// },
    ]
  },
  formatTime:function(time){
  	console.log(util)
  	console.log(time)
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

  	const data = {pi:1, ps:10}
    // 页面渲染完成
    wx.request({
      url: 'http://www.liangfangji.com/archivesjson/manager', //仅为示例，并非真实的接口地址
      data: data,
      dataType:'json',
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log('res.data:', res.data)
        const { data:{archives} } = res.data
        this.setData({moments:archives})
      },
      fail: (error) => {
       console.log('error:', error)
      }
    })

  },
  onReady:function(){
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
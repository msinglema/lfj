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
    fetching:false,
    my_cases:[],
    cases:[],

    // categories:['精选','儿科', '妇科', '慢病','骨科', '皮肤科','护理','口腔'],
    categories:[],
    category_expand: false,

    userInfo: {}
  },
  //事件处理函数
  onLoad: function () {
    console.log('index onLoad')

    app._getUserInfo().then((userInfo)=>{
      this.setData({ userInfo })

      this.getCategory()
      this.getMyData()
      this.getAllData('999')
    })

  },

  showInput: function () {
    this.setData({inputShowed: true })
  },
  hideInput: function () {
    this.setData({
      query: "",
      inputShowed: false
    })
  },
  clearInput: function () {
    this.setData({query: ""})
  },
  inputTyping: function (e) {
    this.setData({query: e.detail.value })
  },
  doSearch: function (e) {
      console.log('event: ', e)
      wx.navigateTo({url: `../search/search?query=${e.detail.query}`})
  },

  loadmore: function(e){
    const { data:{pi, totalpage, fetching} } = this
    console.log('load more')
    if( pi < totalpage && !fetching ){
      this.setData({pi:pi+1, fetching:true})
      this.getAllData(999)
    }
  },

  getCategory: function(){
    request({path:'GET_CATEGORY'})
        .then((result)=>{
          const { data:categories } = result
          this.setData({categories})
        }, (error)=>{
          console.log('error: ', error)
        })
  },
  changeCategory: function(e){
    console.log('e: ', e)
    const { target:{dataset} } = e
    const { id } = dataset
    this.setData({cases:[], cur_id:id, pi:0})
    this.getAllData(id)
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
  getAllData: function(category){
    const {data:{pi, ps, cases}} = this
    const data = { pi, ps, show_all:1, biz:0, cate:category }

    request({path:'GET_PRESCRIPTION', data})
        .then((result)=>{
          const { data:{items, totalpage} } = result
          this.setData({cases:cases.concat(items), totalpage, fetching:false})
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
    this.setData({category_expand:!this.data.category_expand})
  },

  imagePreview:function(e){
    const { currentTarget:target } = e
    const { dataset:{src, list} } = target

    const urls = list.map((item)=>`https://${item.img_id}`)
    wx.previewImage({
        current: `https://${src}`, // 当前显示图片的http链接
        urls: urls // 需要预览的图片http链接列表
    })
  },
  showDetail: function (e){
    const { currentTarget:target } = e
    const { dataset:{btype, id} } = target
    console.log('btype, id: ', btype, id)
    if( "1" === btype || "2" === btype ) wx.navigateTo({url: `../detail/prescription?id=${id}`})
    if( "3" === btype ) wx.navigateTo({url: `../detail/disease?id=${id}`})
  }

})

const app = getApp()

import util from '../../utils/util.js'
const { request } = util

Page({
    data:{
        detail:{}
    },
    onLoad:function(options){
        console.log( options )
        app._getUserInfo().then((userInfo)=>{
          this.setData({ userInfo })
        })
        const { id } = options
        const path = 'GET_PRESCRIPTION_ITEM'
        const data = { item_id: id }
        request({ path, data })
            .then((result)=>{
                this.setData({detail:result.data[0]})
            }, (error)=>{
              console.log('error: ', error)
            })
    },
    onShow:function(){
    },
    setLike:function(){
        const { data:{detail} } = this
        const path = 'SET_LIKE'
        const data = { item_id: detail.Id, item_type: detail.BizTypeId }
        request({ method:'POST', path, data })
            .then((result)=>{
                console.log('result: ', result)
            }, (error)=>{
                console.log('error: ', error)
            })
    },
    goComment: function(){
        const { data:{detail} } = this
        wx.navigateTo({url: `comment?item_id=${detail.Id}&item_type=${detail.BizTypeId}`})
    },
    imagePreview:function(e){
      const { currentTarget:target } = e
      const { dataset:{src, list} } = target

      const urls = list.map( (item)=>`https://${item.img_id}` )
      wx.previewImage({
          current: `https://${src}`, // 当前显示图片的http链接
          urls: urls // 需要预览的图片http链接列表
      })
    }
})

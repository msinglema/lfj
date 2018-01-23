const app = getApp()

import util from '../../utils/util.js'
const { request } = util

Page({
    data:{
        detail:{},
        first:true,
        comments:[]
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
                const detail = result.data[0]
                this.setData({detail})

                //获取评论
                request({ path:'GET_COMMENT', data:{pi:0, ps:100, biz:detail.BizTypeId, item_type:detail.typeId, item_id:id} })
                    .then((result)=>{
                        const comments = result.data
                        this.setData({comments, first:false})
                    }, (error)=>{
                      console.log('error: ', error)
                    })

            }, (error)=>{
              console.log('error: ', error)
            })
    },
    onShow:function(){
        const { first, detail } = this.data
        if(first) return
        //获取评论
        request({ path:'GET_COMMENT', data:{pi:0, ps:100, biz:detail.BizTypeId, item_type:detail.typeId, item_id:detail.Id} })
            .then((result)=>{
                const comments = result.data
                this.setData({comments})
            }, (error)=>{
              console.log('error: ', error)
            })
    },
    setLike:function(){
        const { data:{detail} } = this
        const path = 'SET_LIKE'
        const data = { item_id: parseInt(detail.Id), item_type: parseInt(detail.BizTypeId) }
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

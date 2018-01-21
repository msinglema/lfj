const app = getApp()

import util from '../../utils/util.js'
const { request } = util

Page({
    data:{
    },
    onLoad:function(options){
        console.log( options )
        const { item_id, item_type } = options
        this.setData({item_id, item_type})
    },
    addComment: function(e){
      const { value:formData } = e.detail
      console.log('formData: ', formData)

      const path = 'ADD_COMMENT'
      const { item_id, item_type } = this.data
      const data = { item_id:parseInt(item_id), item_type:parseInt(item_type), content:formData.content }
      request({ method:'POST', path, data })
          .then((result)=>{
              console.log('result: ', result)
          }, (error)=>{
              console.log('error: ', error)
          })
    }
})

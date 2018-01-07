const app = getApp()

import util from '../../utils/util.js'
const { request } = util

Page({
    data:{
        detail:{}
    },
    onLoad:function(options){
        const { id } = options
        // const id = 39177
        const path = `GET_DETAIL_DISEASE`
        const data = { id }
        console.debug('path: ', path)
        request({ path, data})
            .then((result)=>{
                this.setData({detail:result})
            }, (error)=>{
              console.log('error: ', error)
            })
    },
    onShow:function(){
    }
})

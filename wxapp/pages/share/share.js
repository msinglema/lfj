//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        index: 2,
        array: ['儿科', '妇科', '骨科', '皮肤科'],
        files:[],
        img_list:[],
        desc:'',
        count:9
    },
    chooseImage: function(e){
        const {data} = this
        wx.chooseImage({
         count: data.count,
         sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
         sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
         success: (res)=> {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            console.log(data.files.length);
            if(data.files.length === data.count){
                wx.showModal({
                    content: '图片上限为' + data.count + '张',
                    showCancel: false,
                    success: (res)=>{
                        if (res.confirm) {
                            console.log('用户点击确定')
                        }
                    }
                });
                return;
            }
            wx.uploadFile({
                  url: 'http://www.liangfangji.com/archivesjson/add_img',
                  filePath: res.tempFilePaths[0],
                  name: 'image',
                  formData:{
                    'user': 'test'
                  },
                  success: (res)=>{
                    console.log('res: ', res)
                    this.setData({
                      img_list: [JSON.parse(res.data)]
                    })
                    //do something
                  },
                  fail: (err)=>{
                    console.log('err: ', err)
                  }
                })

            this.setData({
                 files: data.files.concat(res.tempFilePaths)
            });
         }
     })
    },
    handleImage: function(e) {
        const { currentTarget:target } = e
        const { dataset } = target
        const { data:{files} } = this

        wx.showActionSheet({
          itemList: ['预览图片', '删除图片'],
          success: (res)=> {
            switch(res.tapIndex){
                case 0:
                    wx.previewImage({
                        current: target.src, // 当前显示图片的http链接
                        urls: files // 需要预览的图片http链接列表
                    })
                    break;
                case 1:
                    files.splice(dataset.index, 1)
                    this.setData({files: files})
                    break;
                default:
                    break;
            }
          },
          fail: (res)=>{
            console.log(res.errMsg)
          }
        })
    },
    bindPickerChange: function(e) {
        const { value } = e.detail
        this.setData({
          index: value
        })
    },
    bindTextAreaBlur: function(e){
      console.log('textarea 失去焦点，携带值为', e.detail.value)
    },
    formSubmit: function(e) {  

       const { value:formData } = e.detail
       const { data:{img_list} } = this.data
       formData.img_list = img_list
       console.log('formData: ', formData)
       wx.request({
         url: 'http://www.liangfangji.com/archivesjson/add', //仅为示例，并非真实的接口地址
         data: formData,
         method:'POST',
         dataType:'json',
         header: {
            // 'content-type': 'application/x-www-form-urlencoded',
             'content-type': 'application/json' // 默认值
         },
         success: function(res) {
           console.log('res.data:', res.data)
         },
         fail: function(error) {
          console.log('error:', error)
         }
       })

     }, 
    onLoad: function () {

    }
})

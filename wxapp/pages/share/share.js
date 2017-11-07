import util from '../../utils/util.js'

//获取应用实例
const app = getApp()

Page({
    data: {
        index: 0,
        array: ['其他','儿科', '妇科', '慢病','骨科', '皮肤科','护理','口腔'],
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
            const new_files = res.tempFilePaths
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

            const upLoadImage = (image) => {
              return new Promise((resolve, reject)=>{

                wx.uploadFile({
                  url: util.getAPIPath('ADD_IMAGE'),
                  filePath: image,
                  name: 'image',
                  header: util.getHeader(),
                  success: (res)=>{
                    console.log('res: ', res)
                    const result = JSON.parse(res.data)
                    // not login
                    if( -1 === result.ret ){
                      util.handleLogin()
                    } else {
                      resolve(result)
                    }
                  },
                  fail: (err)=>{
                    console.log('err: ', err)
                    reject(err)
                  }
                })

              })
            }

            Promise.all( new_files.map(file=>upLoadImage(file)) )
              .then( list=>{
                console.log('promise all list: ', list)
                this.setData({
                  files: data.files.concat(new_files),
                  img_list: data.img_list.concat(list)
                })
              })
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
       const { data:{img_list} } = this
       formData.img_list = img_list
       console.log('formData: ', formData)
       wx.request({
         url: util.getAPIPath('ADD_ARCHIVE'),
         data: formData,
         method:'POST',
         dataType:'json',
         header: util.getHeader(),
         success: function(res) {
           console.log('res.data:', res.data)
           const { data:result } = res
           // not login
           if( -1 === result.ret ){
              util.handleLogin()
           } else {
              wx.navigateTo({url: 'share_success'})
           }
         },
         fail: function(error) {
          console.log('error:', error)
         }
       })

     },
    onLoad: function () {

    }
})

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const baseUrl = 'https://www.liangfangji.com'
const APIConf = {
  //archives
  'GET_ARCHIVES':`${baseUrl}/archivesjson/manager`,
  'ADD_ARCHIVE':`${baseUrl}/archivesjson/add`,
  'ADD_IMAGE':`${baseUrl}/archivesjson/add_img`
}

const getHeader = () => {
  let header
  const session_id = wx.getStorageSync('sid') //本地取存储的sessionID
      if (session_id != "" && session_id != null) {
          header = { 'content-type': 'application/json', 'Cookie': 'ci_session=' + session_id }
      } else {
          header = { 'content-type': 'application/json' }
      }
      return header
}

const getAPIPath =  name => {
  const lfj_sess = wx.getStorageSync('lfj_sess')
  const url = `${APIConf[name]}?lfj_sess=${lfj_sess}`
  return url
}

const handleLogin = () => {
  wx.login({
    success: res => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      if (res.code) {
        //发起网络请求
        wx.request({
          url: 'https://www.liangfangji.com/usrwx/onlogin',
          data: {
            code: res.code
          },
          success: result => {
            console.log('result: ', result)
            const {data:{ret, lfj_sess, sid, message}} = result
            if( 0 === ret){
              try {
                  wx.setStorageSync('lfj_sess', lfj_sess)
                  wx.setStorageSync('sid', sid)
                  wx.switchTab({url: '/pages/index/index'})
              } catch (e) {
                console.warn('set storag err: ', e)
              }
            } else {
              console.warn('onlogin err: ', message)
            }
          }
        })
      } else {
        console.log('获取用户登录态失败！' + res.errMsg)
      }
    }
  })
}

module.exports = {
  formatTime,
  getAPIPath,
  getHeader,
  handleLogin
}

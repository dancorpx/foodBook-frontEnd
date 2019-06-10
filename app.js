const AV = require('./utils/av-weapp-min.js')
const config = require('./keys.js')

AV.init({
  appId: config.leanCloudID,
  appKey: config.leanCloudSecret,
});

App({
onLaunch: function () {
  console.log(444, this.globalData)
  const host = 'http://47.99.223.218/api/v1/'
  console.log('processing to login')
  wx.login({
    success: (res) => {
      console.log(res)
      wx.request({
        url: host + 'login',
        method: 'post',
        data: {
          code: res.code
        },
        success: (res) => {
          console.log(333,res)
          this.globalData.userId = res.data.userId
          this.globalData.userAvatar = res.data.userAvatar
          console.log(555, this.globalData)
        }
      })
    }
  })
},
globalData: {
  // userId: null,
  // userAvatar: null
 }
})
const AV = require('./utils/av-weapp-min.js')
const config = require('./keys.js')

AV.init({
  appId: config.leanCloudID,
  appKey: config.leanCloudSecret,
});

App({
onLaunch: function () {
  console.log(444, this.globalData)
  const host = 'https://cooki.weminusplus.com/api/v1/'
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
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
},
globalData: {
  // userId: null,
  // userAvatar: null
 }
})
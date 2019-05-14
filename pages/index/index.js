//index.js
//获取应用实例
const app = getApp()
const globalData = app.globalData
const myRequest = require('../../lib/api/request')

Page({

  getUserInfo: function (e) {
    let page = this
    console.log(131,e)
    globalData.userInfo = e.detail.userInfo
    page.setData({
      // userInfo: e.detail.userInfo,
      avatar: e.detail.userInfo.avatarUrl
    })

    wx.showToast({ title: 'logging in...', icon: 'loading', duration: 1000 })
    console.log(777, globalData.userInfo.avatarUrl)
    myRequest.put({
      path: `users/${globalData.userId}`,
      data: {
        avatar: page.data.avatar
      },
      success(res) {
        console.log(9090, res)
        if (res.statusCode > 300) {
          wx.showModal({
            title: 'error',
            content: 'something went wrong',
            success: function (res) {
              if (res.confirm) {
                console.log('confirm')
              } else if (res.cancel) {
                console.log('cancel')
              }
            }
          })
        }else{
          globalData.userAvatar = res.data.avatar
          wx.showToast({ title: 'success', icon: 'success', duration: 1000 })
          console.log(585)
          wx.navigateTo({
            url: '/pages/main/main'
          })
        }
      }
    })
  }
})
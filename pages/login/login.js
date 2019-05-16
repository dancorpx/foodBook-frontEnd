// pages/login/login.js

const app = getApp()
const globalData = app.globalData
const myRequest = require('../../lib/api/request')

Page({
  // bindAddRecipe: function (e) {
  //   if (globalData.userName === null) {
  //     wx.navigateTo({
  //       url: '/pages/login/login',
  //     })
  //   }else {
  //     wx.navigateTo({
  //       url: '/pages/addRecipe/addRecipe',
  //     })
  //   }
  //   }
  // }

  getUserInfo: function (e) {
    let page = this
    console.log(131, e)
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
        } else {
          globalData.userAvatar = res.data.avatar
          wx.showToast({ title: 'success', icon: 'success', duration: 1000 })
          wx.switchTab({
            url: '/pages/main/main',
          })
        }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // setTimeout(function () {
    //   wx.reLaunch({
    //     url: '/pages/main/main'
    //   })
    // }, 2000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
// pages/addRecipe/addRecipe.js
const app = getApp()

const myRequest = require('../../lib/api/request.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  bindSubmit: function (e) {

    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1000
    })
  let title = e.detail.value.title
  let method = e.detail.value.method

  console.log(e)
  app.globalData.items.unshift({title: title, method: method})

  setTimeout(function () {
    wx.reLaunch({
      url: '/pages/main/main',
    })
  }, 1000)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
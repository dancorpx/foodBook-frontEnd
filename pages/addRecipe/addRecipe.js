// pages/addRecipe/addRecipe.js
const app = getApp()
const AV = require('../../utils/av-weapp-min.js')
const myRequest = require('../../lib/api/request.js');

Page({

  /**
   * 页面的初始数据
   */
  data: { },
  //  Form submit button
  bindSubmit: function (e) {
    
    let page = this
    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1000
    })

    // Post new story to API
    myRequest.post ({
      path: 'recipes',
      data: {
        recipe: {
          title: e.detail.value.title,
          method: e.detail.value.method,
          image_url: page.data.image_url,
          ingredients: e.detail.value.ingredients
        }
      },
      success(res) {
        console.log(res)
      }
    })
  
  setTimeout(function () {
    wx.reLaunch({
      url: '/pages/main/main',
    })
  }, 1000)

  },

  takePhoto: function () {
    let page = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let tempFilePath = res.tempFilePaths[0];
        console.log(343, tempFilePath)
        console.log('Sending image to LeanCloud')
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save().then( function(file) {
          file => console.log(file.url())
         page.setData({ image_url: file.url() }) 
         console.log(111, page.data.image_url)
        }).catch(console.error);
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
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
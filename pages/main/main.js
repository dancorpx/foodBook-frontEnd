// pages/main/main.js
const app = getApp()

const myRequest = require('../../lib/api/request');

Page({

  /**
   * 页面的初始数据
   */
  data: { items: [] },
    
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let page = this
    // fetch items from API
    myRequest.get({
      path: 'recipes',
      success(res)  {
        console.log(res)
        page.setData({items : res.data.recipes})
      }
    })
  },
    goRecipe: function (e) {
      let that = this
      let data = e.currentTarget.dataset
      let index = data.index
      let item_id = that.data.items[index].id

      let _url = '/pages/recipe/item?id=' + item_id

      console.log("goRecipe - item >>")
      console.log(index)

      app.globalData.recipe = that.data.items[index]
      wx.redirectTo({
        url: _url,
      })
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
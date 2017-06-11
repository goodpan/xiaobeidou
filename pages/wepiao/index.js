// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _self = this;
    wx.request({
      url: 'https://v.juhe.cn/wepiao/query',
      data: {
        key: '414b97fb8e82ce879d90e9aaa7407aa4'
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log(res)
        if (res.data && res.statusCode == 200) {
          var h5url = res.data.result.h5url;
          var h5weixin = res.data.result.h5weixin;
          // wx.navigateTo({
          //   url: h5url
          // })
        }
      }
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
// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teammatch:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _self = this;
    wx.request({
      url: 'https://op.juhe.cn/onebox/basketball/nba',
      data: {
        key: '66833c7218463705f736af0e8e869fc7'
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.data && res.statusCode == 200) {
          console.log(res.data.result)
          _self.setData({
            teammatch: res.data.result.teammatch,
            title: res.data.result.title
          })
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
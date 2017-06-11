// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      wifiList:[],
      latitude:0,
      longitude:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _self = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var lat = res.latitude;
        var lon = res.longitude;
        wx.request({
          url: 'https://apis.juhe.cn/wifi/local',
          data: {
            key: '957c9c834b062c702843fbf958df17ae',
            lon: lon,
            lat: lat,
            gtype: 1,
            r: 3000
          },
          header: {
            'content-type': 'application/json'
          },
          success: (res) => {
            if (res.data && res.data.resultcode == 200) {
              _self.setData({
                wifiList: res.data.result.data
              })
            }
          }
        })
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
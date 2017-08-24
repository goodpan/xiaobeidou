// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      renderData:[],
      reqData:{
        // key: '336d03e11ceaded0dbac54d1766a45b7',
        pno: 1,
        ps: 10
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData()
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
      var data = this.data.reqData;
      ++data.pno;
      this.setData({
        reqData:data
      })
      this.fetchData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  fetchData(){
      var _self = this;
      wx.request({
        url: 'http://www.goodpan.cn/api/xcx/jingxuan',
        data: _self.data.reqData,
        header: {
          'content-type': 'application/json'
        },
        success: (res) => {
          if (res.data) {
            _self.setData({
              renderData: _self.data.renderData.concat(res.data.result.list)
            })
          }
        }
      })
  }
})
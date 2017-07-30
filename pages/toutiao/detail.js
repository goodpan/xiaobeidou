// detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:'',
      article:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url = options.url || '';
    this.setData({
        url: url
    });
    this.fetchData();
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
  
  },
  fetchData: function () {
    var _self = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000
    });
    wx.request({
      url: 'http://www.goodpan.cn/api/xcx/detail',
      data: {
        type:'toutiao',
        url:_self.data.url,
        wid:''
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.data && res.statusCode == 200) {
            var article = res.data;
            WxParse.wxParse('article', 'html', article, _self, 5);
        }
          console.log(res)
          wx.hideToast();
      }
    })
  }
})
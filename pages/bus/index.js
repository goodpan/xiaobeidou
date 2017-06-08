// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    busList:[],
    bus:0
  },
  bindKeyInput: function (e) {
    this.setData({
      bus: e.detail.value
    })
  },
  toSearch:function(){
    console.log(this)
    var _self = this;
    wx.request({
      url: 'https://op.juhe.cn/189/bus/busline',
      data: {
        key: 'daaca038d5f6b449590459b61ef661db',
        city: '厦门',
        bus: _self.bus
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.data && res.statusCode == 200) {
          console.log(res.data.result)
          _self.setData({
            busList: res.data.result
          })
        }
      }
    })
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
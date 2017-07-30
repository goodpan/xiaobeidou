// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    busList:[],
    bus:0
  },
  bindSearch: function (e) {
    this.setData({
      bus: e.detail.value
    })
  },
  toSearch:function(){
    var _self = this;
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 5000
    })
    wx.request({
      url: 'https://op.juhe.cn/189/bus/busline',
      data: {
        key: 'daaca038d5f6b449590459b61ef661db',
        city: '厦门',
        bus: _self.data.bus
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        wx.hideToast()
        if (res.data && res.statusCode == 200) {
          _self.setData({
            busList: res.data.result
          })
        }
        if (res.data.error_code){
          _self.setData({
            busList: []
          })
        }
      },
      fail:(res)=>{
        wx.showToast({
          title: "未匹配到查询到数据",
          icon: "loading",
          duration: 5000
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.city)
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
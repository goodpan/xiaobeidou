// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      renderData:[],
      reqData:{
        key:'3905a55aabd01d26547280b088c6885c',
        word:'100'
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.fetchData();
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
  bindSearch:function(e){
    var data = this.data.reqData;
    data.word = e.detail.value;
    this.setData({
      reqData: data
    });
    this.fetchData();
  },
  bindKeyInput: function (e) {
    var data = this.data.reqData;
    data.word = e.detail.value;
    this.setData({
      reqData: data
    })
  },
  switchWord:function(e){
    var word = e.target.dataset.word;
    var data = this.data.reqData;
    data.word = word;
    this.setData({
      reqData:data
    });
    this.fetchData();
  },
  fetchData:function(){
    var _self = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000
    });
    wx.request({
      url: 'https://v.juhe.cn/chengyu/query',
      // url:'http://www.goodpan.cn/api/xcx/chengyu',
      data: _self.data.reqData,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.data && res.statusCode == 200) {
          _self.setData({
            renderData: res.data.result,
            isInit:false
          })
        }
        wx.hideToast();
      }
    })
  }
})
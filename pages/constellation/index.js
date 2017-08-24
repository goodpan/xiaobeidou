// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      renderData:null,
      todayData:null,
      tomorrowData:null,
      weekData:null,
      nextweekData:null,
      monthData:null,
      yearData:null,
      reqData:{
        consName: '白羊座',
        type: 'today'
      },
      tabData:[
        {
          type:'today',
          text:'今日'
        },
        {
          type: 'tomorrow',
          text: '明日'
        },
        {
          type: 'week',
          text: '本周'
        },
        {
          type: 'nextweek',
          text: '下周'
        },
        {
          type: 'month',
          text: '本月'
        },
        {
          type: 'year',
          text: '本年'
        }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var consName = options.consName;
    var reqData = this.data.reqData;
    reqData.consName = consName;
    this.setData({
      reqDtata: reqData
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
  switchTab:function(event){
    var index = event.currentTarget.dataset.index;
    var reqData = this.data.reqData;
    reqData.type = this.data.tabData[index].type;
    this.setData({
      reqData: reqData
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
      url: 'http://www.goodpan.cn/api/xcx/constellation',
      data: _self.data.reqData,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res) {
          _self.setData({
            renderData: res.data
          })
        }
        wx.hideToast();
      }
    })
  }
})
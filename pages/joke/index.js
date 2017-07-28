// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokeList:[],
    reqData:{
      key: '8e7c1acee39a803115f259f11d876e1c',
      sort: 'desc',
      page: 1,
      pagesize: 20,
      time: Date.parse(new Date()) / 1000
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
      var data = this.data.reqData;
      ++data.page;
      this.setData({
        reqData: data
      });
      this.fetchData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  fetchData:function(){
    var _self = this;
    wx.request({
      url: 'https://japi.juhe.cn/joke/content/list.from',
      data: _self.data.reqData,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.data && res.statusCode == 200) {
          console.log(res.data.result.data)
          _self.setData({
            jokeList: _self.data.jokeList.concat(res.data.result.data)
          })
        }
      }
    })
  }
})
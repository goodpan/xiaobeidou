// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    cover:'',
    dir:'',
    tag:'',
    year:'',
    act:'',
    desc:'',
    video_rec:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _self = this;
    wx.request({
      url: 'https://op.juhe.cn/onebox/movie/video',
      data: {
        key: 'fdf3daf9ff4e8fc0c69173613a3099fd',
        q: '心花路放'
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.data && res.statusCode == 200) {
          _self.setData({
            title: res.data.result.title,
            cover:res.data.result.cover,
            dir:res.data.result.dir,
            tag:res.data.result.tag,
            year:res.data.result.year,
            act:res.data.result.act,
            desc:res.data.result.desc,
            video_rec:res.data.result.video_rec
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
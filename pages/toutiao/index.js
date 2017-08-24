// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList:[],
    currentTab:'头条',
    currentType:'top',
    tab:[
      {
        name: 'top',
        cn: '头条'
      },
      {
        name: 'shehui',
        cn: '社会'
      },
      {
        name: 'guonei',
        cn: '国内'
      },
      {
        name: 'guoji',
        cn: '国际'
      },
      {
        name: 'yule',
        cn: '娱乐'
      },
      {
        name: 'tiyu',
        cn: '体育'
      },
      {
        name: 'junshi',
        cn: '军事'
      },
      {
        name: 'keji',
        cn: '科技'
      },
      {
        name: 'caijing',
        cn: '财经'
      },
      {
        name: 'shishang',
        cn: '时尚'
      }
    ]
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  switchPage:function(event){
    // var type = event.currentTarget.dataset.val;
    var index = event.currentTarget.dataset.index;
    this.setData({
      currentTab: this.data.tab[index].cn,
      currentType:this.data.tab[index].name
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
      url: 'http://www.goodpan.cn/api/xcx/toutiao',
      data: {
        // key: '8d9af834b7b4fbf0884737ffba94f7cf',
        type:_self.data.currentType
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log(res);
        if (res.data) {
          console.log(res.data.result.data)
          _self.setData({
            newsList: res.data.result.data
          })
        }
        wx.hideToast();
      }
    })
  }
})
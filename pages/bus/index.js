// index.js
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../utils/bmap-wx.min.js');
var wxMarkerData = []; 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    busList:null,
    bus:0,
    city:''
  },
  bindSearch: function (e) {
    var bus = e.detail.value;
    if(!bus){
      wx.showModal({
        title: '提示',
        content: '请输入路线进行查询',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return;
    }
    this.setData({
      bus: bus
    });
    this.toSearch();
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
        city: _self.data.city,
        bus: _self.data.bus
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        wx.hideToast()
        if (res.data && res.statusCode == 200) {
          _self.setData({
            busList: res.data.result||[]
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
  getLoctionCity(){
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'I39AEjVeqKqA7t6YYi7ZkqW46gxt9aYR'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var city = data.originalData.result.addressComponent.city;
      that.setData({
        city: city
      })
    }
    // 发起regeocoding检索请求 
    BMap.regeocoding({
      fail: fail,
      success: success
    }); 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.city){
      this.setData({
        city: options.city
      })
    }else{
      this.getLoctionCity();
    }
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
  relocation:function(){
    wx.redirectTo({
      url: '/pages/switchcity/switchcity',
    })
  }
})
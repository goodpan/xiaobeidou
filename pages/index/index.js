//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  toNews:function(){
    wx.navigateTo({
      url: '../news/index'
    })
  },
  toWifi:function(){
    wx.navigateTo({
      url: '../wifi/index'
    })
  },
  toBus:function(){
    wx.navigateTo({
      url: '../bus/index'
    })
  },
  toWeipiao:function(){
    wx.navigateTo({
      url: '../wepiao/index'
    })
  },
  toCalendar:function(){
    wx.navigateTo({
      url: '../calendar/index'
    })
  }
})

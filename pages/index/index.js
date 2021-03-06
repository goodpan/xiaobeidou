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
  },
  toNBA:function(){
    wx.navigateTo({
      url: '../nba/index'
    })
  },
  toFootball:function(){
    wx.navigateTo({
      url: '../football/index'
    })
  },
  toTV:function(){
    wx.navigateTo({
      url: '../tv/index'
    })
  },
  toMovie:function(){
    wx.navigateTo({
      url: '../movie/index'
    })
  },
  toToutiao:function(){
    wx.navigateTo({
      url: '../toutiao/index'
    })
  },
  toJoke:function(){
    wx.navigateTo({
      url: '../joke/index'
    })
  },
  toRank:function(){
    wx.navigateTo({
      url: '../rank/index'
    })
  },
  toDream:function(){
    wx.navigateTo({
      url: '../dream/index'
    })
  },
  toMobile:function(){
    wx.navigateTo({
      url: '../mobile/index'
    })
  },
  toConstellation:function(){
    wx.navigateTo({
      url: '../constellations/index'
    })
  },
  toFinance:function(){
    wx.navigateTo({
      url: '../finance/index'
    })
  },
  toChengYu:function(){
    wx.navigateTo({
      url: '../chengyu/index'
    })
  }
})

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   
  },
  onLoad: function () {
    var reqKey = '7a8c9ff80fa08a7ef45f4db0a397e7a4';
    wx.request({
      url: 'https://op.juhe.cn/robot/index', //仅为示例，并非真实的接口地址
      data: {
        info:'您好',
        key:reqKey
      },
      header: {
        'content-type': 'application/json'
      },
      method:'get',
      success: function (res) {
        console.log(res.data)
      }
    })    
  }
})
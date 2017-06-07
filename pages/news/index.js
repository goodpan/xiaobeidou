//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   
  },
  onLoad: function () {
    var reqKey = '8d9af834b7b4fbf0884737ffba94f7cf';
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index', //仅为示例，并非真实的接口地址
      data: {
        type:'top',
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
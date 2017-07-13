// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    holiday:'',
    avoid:'',
    animalsYear:'',
    desc:'',
    weekday:'',
    suit:'',
    lunarYear:'',
    lunar:'',
    yeaMonth:'',
    date:'',
    title:'',
    day:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _self = this;
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var dateStr = y + '-' + m + '-' + d;
    this.fetchData(dateStr);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.getNowCalendar())
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
  fetchData:function(dateStr){
    var _self = this;
    wx.request({
      url: 'https://v.juhe.cn/calendar/day',
      data: {
        key: '925b85564b7487835ce13c9adc661b16',
        date: dateStr
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.data && res.statusCode == 200) {
          console.log(res.data.result.data)
          var resData = res.data.result.data;
          var date = resData.date.split('-');
          _self.setData({
            title: date[0] + '年' + date[1] + '月' + date[2] + '日' + '  ' + resData.weekday,
            holiday: resData.holiday,
            avoid: resData.avoid.split('.'),
            animalsYear: resData.animalsYear,
            desc: resData.desc,
            weekday: resData.weekday,
            suit: resData.suit.split('.'),
            lunarYear: resData.lunarYear,
            lunar: resData.lunar,
            yeaMonth: resData.yeaMonth,
            date: resData.date,
            day: date[2]
          })
        }
      }
    })
  },
  bindDateChange:function(e){
    this.setData({
      date: e.detail.value
    })
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var resData = e.detail.value.split('-');
    var dateStr = (+resData[0]) + '-' + (+resData[1]) + '-' + (+resData[2]);
    this.fetchData(dateStr);
  },
  getNowFormatDate:function() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if(month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + date.getHours() + seperator2 + date.getMinutes()
    + seperator2 + date.getSeconds();
    return currentdate;
  },
  getNowCalendar:function(){
    var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth()+1,
    d = date.getDate(),
    w = date.getDay();
    if(m <= 9){
       m = '0' + m;
    }
    if(d <= 9 ){
       d = '0' + d;
    }
    return y + '年' + m + '月' + d + '日';
  }
})
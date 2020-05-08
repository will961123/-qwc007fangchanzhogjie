// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
      path: '/pages/myCollection/index',
      tit: '我的收藏',
      icon: '../../static/images/pic35.png'
    }, {
      path: '/pages/leavingMessage/index',
      tit: '在线留言',
      icon: '../../static/images/pic36.png'
    }, {
      path: '/pages/aboutUs/index',
      tit: '关于我们',
      icon: '../../static/images/pic37.png'
    }, {
      path: '/pages/recommendedList/index',
      tit: '我的推荐列表',
      icon: '../../static/images/pic38.png'
    }, {
      path: '../../pages/cooperation/index',
      tit: '商务合作',
      icon: '../../static/images/pic39.png'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  navNavigator(e) { 
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
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
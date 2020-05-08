Page({
  data: {},
  onLoad: function () {}, 
  gotoArticleDetail(e) {
    wx.navigateTo({
      url: '/pages/articleDetail/index',
    })
  },
})
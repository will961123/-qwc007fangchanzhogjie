var appdata = getApp();
var base = require("../../data/banner.js"); //只能用相对路径，不能用绝对路径
var baseconfig = require("../../data/globalconfig.js"); //只能用相对路径，不能用绝对路径
Page({
  data: {
    showAd: true,
    showSelectBox: false,
    navList: [{
        pic: '../../static/images/pic07.png',
        tit: '活动中心',
        type: 'tabbar',
        path: '/pages/active/index'
      },
      {
        pic: '../../static/images/pic08.png',
        tit: '推荐返佣',
        path: '/pages/recommend/index'
      },
      {
        pic: '../../static/images/pic09.png',
        tit: '最新房价',
        path: '/pages/housingPrice/index'

      },
      {
        pic: '../../static/images/pic10.png',
        tit: '选房',
        type: 'tabbar',
        path: '/pages/list/index'
      },
      {
        pic: '../../static/images/pic11.png',
        tit: '文章列表',
        path: '/pages/articleList/index'
      },
    ]
  },
  onLoad: function () {
    this.loadBanner();
  },
  closeAd(){
    this.setData({
      showAd:false
    })
  },
  chnageShowSelectBox() {
    this.setData({
      showSelectBox: !this.data.showSelectBox
    })
  },
  navigate(e) {
    if (e.currentTarget.dataset.type && e.currentTarget.dataset.type === 'tabbar') {
      wx.switchTab({
        url: e.currentTarget.dataset.path,
      })
    } else {
      wx.navigateTo({
        url: e.currentTarget.dataset.path,
      })
    }

  },
  gotoArticleDetail(e) {
    wx.navigateTo({
      url: '/pages/articleDetail/index',
    })
  },
  // 加载banner图
  loadBanner: function () {
    this.setData({
      imgUrls: base.imgUrls,
      swipersetting: base.swipersetting,
    });
  }
})
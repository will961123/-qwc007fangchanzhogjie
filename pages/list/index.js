const app = getApp();
let log = console.log
log = function () {}
let itemHeight = []

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    selectId: 0,
    isTapScroll: false
  },
  onLoad() {
    let list = [];
    for (let i = 0; i < 26; i++) {
      list[i] = String.fromCharCode(65 + i)
    }
    list.unshift(0)
    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  gotoHouseDetail(){
    wx.navigateTo({
      url: '/pages/housingDetail/index',
    })
  },
  getItemHeight() {
    wx.createSelectorQuery().selectAll('.indexItem').boundingClientRect(function (res) {
      itemHeight = res
      log(itemHeight)
    }).exec()
  },
  viewScroll(e) {
    let that = this
    if (e.type === 'scroll' && !this.data.isTapScroll) {
      log('开始滑动', e)
      for (const idx in itemHeight) {
        if (itemHeight[idx].top >= e.detail.scrollTop) {
          log(itemHeight[idx].top, e.detail.scrollTop)
          that.setData({
            selectId: idx
            // selectId: idx <= 0 ? 0 : idx - 1
          })
          return
        }
      }
    }
  },
  onReady() {
    let that = this;
    wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function (res) {
      that.setData({
        boxTop: res.top
      })
    }).exec();
    wx.createSelectorQuery().select('.indexes').boundingClientRect(function (res) {
      that.setData({
        barTop: res.top
      })
    }).exec()
    this.getItemHeight()
  },

  //获取文字信息
  getCur(e) {
    log('点击', e)
    this.setData({
      hidden: false,
      listCur: this.data.list[e.currentTarget.id],
      selectId: Number(e.currentTarget.id),
      isTapScroll: true
    })
  },

  setCur(e) {
    log('设置', e)
    this.setData({
      hidden: true,
      listCur: this.data.listCur
    })
  },
  //滑动选择Item
  tMove(e) {
    log('滑动侧边开始', e)
    let y = e.touches[0].clientY,
      offsettop = this.data.boxTop,
      that = this;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 20);
      this.setData({
        listCur: that.data.list[num],
        selectId: Number(num),
        isTapScroll: true
      })
    };
  },

  //触发全部开始选择
  tStart() {
    log('触发全部开始选择')
    this.setData({
      hidden: false,
      isTapScroll: true
    })
  },
  //触发结束选择
  tEnd() {
    log('触发结束选择')
    this.setData({
      hidden: true,
      listCurID: this.data.listCur
    })
    setTimeout(() => {
      this.setData({
        isTapScroll: false
      })
    }, 800);
  },
  indexSelect(e) {
    let that = this;
    let barHeight = this.data.barHeight;
    let list = this.data.list;
    let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
    for (let i = 0; i < list.length; i++) {
      if (scrollY < i + 1) {
        that.setData({
          listCur: list[i],
          movableY: i * 20
        })
        return false
      }
    }
  }
});
var base = require("/data/banner.js");
var baseconfig = require("/data/globalconfig.js");
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
		if (capsule) {
		 	this.globalData.Custom = capsule;
			this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
		} else {
			this.globalData.CustomBar = e.statusBarHeight + 50;
		}
      }
    })
  },
  globalData: {
    "domain": "https://jinyi.xiuwena.com",
    "apiurl": "https://jinyi.xiuwena.com/miniapi/cosplay.php",
    "appid": "wx3d9ed46918462051",
    "appsecret": "edf1ba76a8a9576635dc76b0a43160c8"
  }
})
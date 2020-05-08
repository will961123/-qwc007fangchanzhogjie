// 时间戳
function utime() {
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  return timestamp.toString();
}
// 时间戳格式化
function formatDateTime(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  var second = date.getSeconds();
  second = second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}
// 随机数
function ranstrs(len) {
  var strpool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var str = "";
  var max = strpool.length;
  for (var i = 0; i < len; i++) {
    str += strpool[Math.floor(Math.random() * max)];
  }
  return str.toUpperCase();
}
function HttpRequst(loading, apiurl, path, method, params, callback) {
  if (loading == true) {
    wx.showLoading({
      title: "数据获取中",
      icon: "none"
    });
  }
  wx.request({
    url: apiurl + path,
    data: params,
    dataType: "json",
    header: { "content-type": "application/json" },
    method: method ? method:"get",
    success: function (res) {
      if (res.statusCode == 200) {
        if (loading == true) {
          wx.showLoading({
            title: "数据获取成功",
            icon: "success",
            duration: 2000
          });
        }
        callback && callback(res);
      } else {
        wx.showLoading({
          title: "数据获取失败",
          icon: "none",
          duration: 2000
        });
        console.log("404");
      }
    }
  })
}
module.exports = {
  HttpRequst: HttpRequst,
  utime: utime,
  ranstrs: ranstrs,
  formatDateTime: formatDateTime,
}
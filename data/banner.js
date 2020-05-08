// 首页轮播图地址
var imgUrls = ["/static/images/pic04.png", "/static/images/pic04.png"];
// 通用轮播图配置
var swipersetting = {
  // 是否自动切换
  autoplay: false,
  // 自动切换时间间隔
  interval: 5000,
  // 滑动动画时长
  duration: 1000,
  // 是否显示面板指示点
  indicatorDots: true
  // // 指示点颜色
  // indicator-color: "#dadada",
  // // 
  // indicator-active-color: "#000"
};
// 产品内页轮播图配置
var swipersetting2 = {
  // 是否自动切换
  autoplay: false,
  // 自动切换时间间隔
  interval: 5000,
  // 滑动动画时长
  duration: 1000,
  // 是否显示面板指示点
  indicatorDots: true
  // // 指示点颜色
  // indicator-color: "#dadada",
  // // 
  // indicator-active-color: "#000"
};
// 导出数据接口
module.exports = {
  imgUrls: imgUrls,
  swipersetting: swipersetting,
  swipersetting2: swipersetting2
};
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userList: [],
    imgUrls: [
      'https://img.yzcdn.cn/upload_files/2019/08/01/FiIBemFn9-obR4TPSoSxJ8QPsgz0.jpg!large.jpg',
      'https://img.yzcdn.cn/upload_files/2019/08/12/Fl5VSuh85LmrVzAGs-lnjV6HSBR-.jpg!large.jpg',
      'https://img.yzcdn.cn/upload_files/2019/08/12/FsaWgCpBdN0G7dDWzLHA3b7MEkF9.jpg!large.jpg'
    ],
    inputShowed: false,
    inputVal: "",
    numBlock: [1, 2, 3, 4]
  },
  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
  inpClick() {
    wx.navigateTo({
      url: '../components/searchbar/searchbar'
    })
  },
  //事件处理函数
  block0: function (event) {
    console.log(event, 'event')
    wx.switchTab({
      url: '../goods/goods',
    })
  },
  block1(event) {
    wx.navigateTo({
      url: '../beauty/beauty',
    })
  },
  block2: function (event) {
    wx.navigateTo({
      url: '../thing/thing'
    })
  },
  block3: function (event) {
    wx.navigateTo({
      url: '../curio/curio',
    })
  },
  block4(event) {
    wx.navigateTo({
      url: '../acc/acc',
    })
  },
  block5: function (event) {
    wx.navigateTo({
      url: '../life/life'
    })
  },
  block6: function (event) {
    wx.navigateTo({
      url: '../clothes/clothes',
    })
  },
  block7(event) {
    wx.navigateTo({
      url: '../aboutUs/aboutUs',
    })
  }
})
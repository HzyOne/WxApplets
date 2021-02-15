// pages/movie/movie.js
var moviesData = require("../../data/movie-data");

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    this.setData({
      movies_key:moviesData.movieList
    })
  },
  onPostTap:function(event){
    var movieId = event.currentTarget.dataset.movieid;

    wx.navigateTo({
      url: '../movie/movie-detail/movie-detail?id=' + movieId,
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
    var list = [];
    var moviesColled = wx.getStorageSync('moviesCollected');
    for(var key in moviesColled){
      var objs = {};
      objs.name = key;
      objs.value = moviesColled[key];
      list.push(objs)
    }
    console.log(list)
    console.log(moviesData)
    // for (var item = 0; item < list.length; item ++) {
    //   if (list[item].name == moviesData.movieList[item].movieId && list[item].value == true) {
    //     moviesData.movieList[item].collects = true;
    //   }
    // }
    // console.log(moviesData.movieList[item].collects)
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

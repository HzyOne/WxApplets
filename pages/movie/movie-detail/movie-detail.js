// pages/movie/movie-detail/movie-detail.js
  var moviesData = require("../../../data/movie-data");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collect:false,
    collected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var movieId = options.id;
    this.data.currentMovieId = movieId;
    var movieData = moviesData.movieList[movieId];
    this.setData({...movieData});

    var moviesCollected = wx.getStorageSync('moviesCollected');
    var moviesCollectedIng = wx.getStorageSync('moviesCollectedIng');
    

    if(moviesCollected){
      var movieCollected = moviesCollected[movieId];
      if(movieCollected){
        this.setData({collect:movieCollected});
      }
    }else{
      var moviesCollected = {};
      moviesCollected[movieId] = false;
      wx.setStorageSync('moviesCollected', moviesCollected);
    }

    if(moviesCollectedIng){
      var movieCollectedIng = moviesCollectedIng[movieId];
      if(movieCollectedIng){
        this.setData({collected:movieCollectedIng});
      }
    }else{
      var moviesCollectedIng = {};
      moviesCollectedIng[movieId] = false;
      wx.setStorageSync('moviesCollectedIng', moviesCollectedIng);
    }

  },

  onCollectedTap:function(){
    var moviesCollected = wx.getStorageSync('moviesCollected');
    var collect = moviesCollected[this.data.currentMovieId];
    
    collect = !collect;
    moviesCollected[this.data.currentMovieId] = collect;
    wx.setStorageSync('moviesCollected', moviesCollected);
    this.setData({
      collect:collect
    });

    wx.showToast({
      title: collect?'已标记想看！':"已取消想看！",
    })
  },

  onCollectedTapIng:function(){
    var moviesCollectedIng = wx.getStorageSync('moviesCollectedIng');
    var collected = moviesCollectedIng[this.data.currentMovieId];
    collected = !collected;
    moviesCollectedIng[this.data.currentMovieId] = collected;
    wx.setStorageSync('moviesCollectedIng', moviesCollectedIng);
    this.setData({
      collected:collected
    });
    wx.showToast({
      title: collected?'已标记看过！':"已取消看过！",
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

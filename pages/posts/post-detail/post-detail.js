// pages/posts/post-detail/post-detail.js
var postsData = require("../../../data/posts-data");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    this.setData({...postData});


    //缓存
    var postsCollected = wx.getStorageSync('postsCollected');

    if(postsCollected){
      var postCollected = postsCollected[postId];
      if(postCollected){
        this.setData({
          collected:postCollected
        });
      }
    }else{
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('postsCollected', postsCollected);
    }
  },

  onCollectionTap:function(){
    var thatPost = this;
    var postsCollected = wx.getStorageSync('postsCollected');
    var collected = postsCollected[this.data.currentPostId];
    

    // wx.showToast({
    //   title: collected?'收藏成功！':"取消成功！",
    // })

    wx.showModal({
      title:"提示",
      content:collected?"是否取消收藏？":"是否收藏该文章？",
      success:function(res){
        if(res.confirm){
          collected = !collected;
          postsCollected[thatPost.data.currentPostId] = collected;
          wx.setStorageSync('postsCollected', postsCollected);
          thatPost.setData({collected:collected});
        }
      }
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
//index.js
//获取应用实例
//获取应用实例
const util = require('../../utils/util.js');
var app = getApp()
Page({
  data: {
    /**
         * 页面配置
         */
    winWidth: 0,
    winHeight: 0,
    // 精选数据
    datalist: [],
    // 日报数据
    dataThemes: [],
    imagesHeightList: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    /**
    * 获取系统信息
    */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
    that.loadData();
  },
  loadData: function () {
    /**
    * 发送请求数据
    */
    var that = this

    util.AJAX("", function (res) {

      var arr = res.data;
      console.log(res.data);

      // 获取当前数据进行保存
      var datalist = that.data.data;
      // 然后重新写入数据
      that.setData({
        //datalist: list.concat(arr),                              // 存储数据
      });
    });
  },
  /**
     * 事件处理
     * scrolltolower 自动加载更多
     */
  scrolltolower: function (e) {

    var that = this;

    // 加载更多 loading
    that.setData({
      hothidden: true
    })

    // 如果加载数据超过10条
    if (this.data) {

      // 加载更多 loading
      that.setData({
        hothidden: false
      });

    } else {

      /**
       * 发送请求数据
       */
      util.AJAX("", function (res) {

        var arr = res.data;
 
        // 获取当前数据进行保存
        var list = that.data;
        // 然后重新写入数据
        that.setData({
          //datalist: list.concat(arr),                              // 存储数据
        });
      });
    }
  },
  WxMasonryImageLoad: function (e) {
    var that = this;
    console.log(e.detail.height);
    
  }

})

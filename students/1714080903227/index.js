//index.js
//��ȡӦ��ʵ��
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
  },
  onLoad: function () {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });
  },
  imageLoad: function (e) {
    var _this = this;
    var $width = e.detail.width,  //��ȡͼƬ��ʵ���
      $height = e.detail.height,
      ratio = $width / $height;  //ͼƬ����ʵ��߱���
    var viewWidth = 800,      //����ͼƬ��ʾ��ȣ�
      viewHeight = 500 / ratio;  //����ĸ߶�ֵ
    this.setData({
      imgwidth: viewWidth,
      imgheight: viewHeight
    })
  },
  
add:function()
{
  wx.navigateTo({
    url: '/pages/add/add',
  })
},
term: function () {
    wx.navigateTo({
      url: '/pages/term/term',
    })
  },
})

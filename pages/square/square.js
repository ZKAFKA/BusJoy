var app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
      value: '',
      tabbarHidden:false,
      userInfo: {},
      hasUserInfo: false,
      // canIUse: a.canIUse('button.open-type.getUserInfo'),
      deliverData: {},
      showZanAndPinglunNum: -1,
      isShowOrHideComtent: false,
      allOrPart: "全文",
      tabs: [
      {
        title: '关注',
        number: '4',
        showBadge: true,
        badge: {
          arrow: true,
          stroke: true,
        },
      },
      {
        title: '推荐',
        showBadge: false,
        badge: {
          arrow: false,
          stroke: true,
        },
      },
      ],
      activeTab: 1,
    },
  
  handleTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handleTabChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.getonBus==true){
      this.setData({
        tabbarHidden:true
      })
    }
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { //下拉刷新数据
      // getAllData();
  },

  handleInput(value) {
    this.setData({
      value,
    });
  },
  handleClear() {
    this.setData({
      value: '',
    });
  },
  handleCancel() {
    this.setData({
      value: '',
    });
  },
  onChange(e) {
    this.setData({
      showVoice: e.detail.value,
    });
  },

})

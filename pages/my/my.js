let app=getApp();
Page({
  data: {
    tabbarHidden:false,
    cardimage:"card-background.jpg",
    tabs: [
      {
        title: '乘车券',
      },
      {
        title: '商家券',
      },
    ],
    activeTab: 0,
    typeCapsule: false,
    typeHasSubTitle: false,
    hasPlus: true,
    hasContentHeight: false,
    slides: [], //轮播图数据
    remind: '加载中',
    help_status: false,
    userid_focus: false,
    passwd_focus: false,
    userid: '',
    passwd: '',
    angle: 0,
  },
  
  onLoad() {
    if(app.getonBus==true){
      this.setData({
        tabbarHidden:true
      })
    }
  },
  onDiscount(){
    my.navigateTo({
      url: "/pages/my/discount/discount"
    });
  },
  onCard(){
    my.navigateTo({
      url: "/pages/cardbag/cardbag"
    });
  },
  onSignin(){
    my.navigateTo({
      url: "/pages/my/signin/signin"
    });
  },
  onRecord(){
    my.navigateTo({
      url: "/pages/my/record/record"
    });
  },
  onRank(){
    my.navigateTo({
      url: "/pages/my/rank/rank"
    });
  },
  onFriend(){
    my.navigateTo({
      url: "/pages/my/friends/friends"
    });
  },
  onFriendcircle(){
    my.navigateTo({
      url: "/pages/my/friendcircle/friendcircle"
    });
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
    my.navigateTo({
      url: "/pages/my/discount/discount"
    });
  },
});

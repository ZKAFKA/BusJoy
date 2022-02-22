let app=getApp();
Page({
  data: {
    adshow:false,
    voncherData: {
      voncherName: '杭州电子公交卡'
    },
    dataSource: [
      {
        label: '出行优惠',
        icon: '出行优惠.png',
      },
      {
        label: '路线规划',
        icon: '路线规划.png',
      },
      {
        label: '可用线路',
        icon: '可用线路.png',
      },
      {
        label: '乘车记录',
        icon: '乘车记录.png',
      }
    ],
  },

  ScanCode() {
    my.switchTab({
      url: "/pages/onbus/onbus",
      success: () => {
          app.getonBus=true
          console.log("success"+app.getonBus)
    }
  })
  },
  adShow(){
    this.setData({
      adshow: true
    });
  },
  adClose(){
    console.log("sss")
    this.setData({
      adshow: false
  });
},
  
  onLoad() {},
});

let app=getApp();
Page({
  data: {
    tabbarHidden:false,
  },
  onLoad() {
    if(app.getonBus==true){
      this.setData({
        tabbarHidden:true
      })
    }
  },
});

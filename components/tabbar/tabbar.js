var path1="../../pages/square/square";
var path2="../../pages/index/index";
var path3="../../pages/my/my";


Component({
  /**
   * 组件的属性列表
   */
  props: {
      idx: {
            type: Number,
            value: 0
        },
      hid: false,
  },
  /**
   * 组件的初始数据
   */
  data: {
    idx: 1,
    tabBar: [{
            "pagePath": path1,
            "text": "动态",
            "iconPath": "/assets/square.png",
            "selectedIconPath": "/assets/square-a.png",
        },
        {
            "pagePath": path2,
            "text": "乘车码",
            "iconPath": "/assets/bus.png",
            "selectedIconPath": "/assets/bus-a.png",
        },
        {
            "pagePath":path3,
            "text": "个人中心",
            "iconPath": "/assets/my.png",
            "selectedIconPath": "/assets/my-a.png",
        },
    ]
  },

  didMount: function didMount() {
    this.initItems();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    initItems: function initItems() {
      var _this$props = this.props,
          i = _this$props.idx;
      this.setData({
        idx: i,
      });
    },

    goToTab: function (e) {
      //如果点击当前页面则不进行跳转
      if (this.data.idx == e.currentTarget.dataset.index) {
        return false
      }else{
        my.redirectTo({
          url: e.currentTarget.dataset.url
        }); 
      }
    },

    changeTab: function(a,b,c){
      path1=a;
      path2=b;
      path3=c;
    }
  },
})
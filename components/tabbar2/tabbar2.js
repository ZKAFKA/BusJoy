var path1="../../pages/news/news";
var path2="../../pages/onbus/onbus";


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
            "text": "资讯",
            "iconPath": "/image/home.svg",
            "selectedIconPath": "/image/home_sel.svg",
        },
        {
            "pagePath": path2,
            "text": "地图",
            "iconPath": "/image/saoma.svg",
            "selectedIconPath": "/image/home_sel.svg",
        }
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

    changeTab: function(a,b){
      path1=a;
      path2=b;
    }
  },
})
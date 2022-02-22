
Page({
  data: {
    showMusic: true,
    showDialog: true,
    // 悬浮窗数据
    ringHidden: false,
    x: 0,
    y: 0,
    stationonbus: [
      '水口',
      '留下',
      '屏峰',
      '西溪医院·横街',
      '留下西',
      '屏基山北',
      '西穆坞',
      '杨家牌楼',
      '营门口',
      '金鱼井',
    ],
    //界面1
    isOnBus:false,
    voncherData: {
      voncherName: '杭州电子公交卡'
    },
    tabs: [
      {
        title: '咨讯',
        number: '4',
        showBadge: false,
        badge: {
          arrow: true,
          stroke: true,
        },
      },
      {
        title: '导航',
        showBadge: false,
        badge: {
          arrow: false,
          stroke: true,
        },
      },
    ],
    activeTab: 1,
    newscontent:[
      {
        newsid:'2021100901',
        type:'article',
        text:'杭州推进建设7个铁路项目 杭州西站枢纽最新进展来了',
        imgArray:[{
          src:'/assets/news/2021100901-1.jpg'
          },
          {
          src:'/assets/news/2021100901-2.jpg'
          },
          {
          src:'/assets/news/2021100901-3.jpg'
          }
        ]
      },
      {
        newsid:'2021100902',
        type:'recommend',
        text:'杭州有个23年的老咖啡馆,叫做凡人咖啡馆',
        imgArray:[{
          src:'/assets/news/2021100902-1.jpg'
          },
          {
          src:'/assets/news/2021100902-2.jpg'
          },
          {
          src:'/assets/news/2021100902-2.jpg'
          }]
      }
    ],

    //搜索框中内容
    mapData:{
      scale: 16,
      longitude: 120.165586,
      latitude: 30.278427,
      enablezoom:true,
      optimize:true,
      markers:[],
      includePoints: [{
        latitude: 30.279383,
        longitude: 120.131441,
      }],
      polyline: [{
        points: [{
            longitude: 120.131441,
            latitude: 30.279383,
        },{
          longitude: 120.131441,
            latitude: 30.2,
          }
        ],
        color:"#fda969",
        width: 5,
        dottedLine: false,
        zIndex:4
      },{
        points: [{
          longitude: 120.165586,
          latitude: 30.278427,
        }, {
          longitude: 120.170795,
          latitude: 30.276716,
        }, {
          longitude: 120.16212,
          latitude: 30.27865
        }, {
          longitude: 120.154613,
          latitude: 30.278143
        }, {
          longitude: 120.148473,
          latitude: 30.27773,
        }],
        color: "#FF0000DD",
        width: 5,
        dottedLine: false,
        
      }],
      circles: [{
        latitude: 30.279383,
        longitude: 120.131441,
        color: "'#fda969",
        fillColor: "'#fda969",
        radius: 80,
        strokeWidth: 5,
      }],
      controls: [{
        id: 1,
        iconPath: '/assets/eat.png',
        position: {
          left: 10,
          top: 500,
          width: 40,
          height: 40
        },
        clickable: true
      },{
        id: 2,
        iconPath: '/assets/drink.png',
        position: {
          left: 55,
          top: 500,
          width: 40,
          height: 40
        },
        clickable: true
      },{
        id: 3,
        iconPath: '/assets/play.png',
        position: {
          left: 10,
          top: 545,
          width: 40,
          height: 40
        },
        clickable: true
      },{
        id: 4,
        iconPath: '/assets/buy.png',
        position: {
          left: 55,
          top: 545,
          width: 40,
          height: 40
        },
        clickable: true
      },/*{
        id: 5,
        iconPath: '/assets/25m.png',
        position: {
          left: 270,
          top: 5,
          width: 66,
          height: 35
        },
        clickable: true
      },{
        id: 6,
        iconPath: '/assets/100m.png',
        position: {
          left: 270,
          top: 38,
          width: 66,
          height: 35
        },
        clickable: true
      }*/
      ],
    },
    panels:[{
    	 id:6,
       // 布局参考 map 高级定制渲染
       layout: {
   			 	params:{
      			title:"标题栏",
      			bgColor:"#DC143C"
    			},
   		 		src:"/layout/map_callout.xml"
  		 },
       position: {
         left: 0,
         bottom: 0,
         width: 200,
         height: 84
       },
    }],
    showAdv:{
      opacity:0,
      markerID:'',
      calloutShopname:'',
    },
    animationMain:null,//正面
  	animationBack:null,//背面
  },

  onDialogTap() {
   this.setData({
     showDialog: false,
   });
  },

  scanQR(){
     my.scan({
      scanType: ['qrCode','barCode'],
      success: (res) => {
        my.alert({ title: res.code });
      },
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
    my.alert({
      content: 'plus clicked',
    });
  },

  hiddenMask() {
    this.animation_main = my.createAnimation({
      duration: 500,
      timingFunction: "linear",
      delay: 0
    })
    this.animation_back = my.createAnimation({
      duration: 500,
      timingFunction: "linear",
      delay: 0
    })
    this.animation_main.translate(120,250).scale(0.15).step()
    this.animation_back.translate(120,250).scale(0.15).step()
    this.setData({
      animationMain: this.animation_main.export(),
      animationBack: this.animation_back.export(),
      hid: true
    })
    setTimeout(function () {
    this.animation_main.translate(120,250).scale(0.15).step()
    this.animation_back.translate(120,250).scale(0.15).step()
    this.setData({
        animationMain: this.animation_main.export(),
        animationBack: this.animation_back.export(),
        showMask: true
      })
    }.bind(this), 1000)
  },
  rotateFn(e) {
      var id = e.currentTarget.dataset.id
      this.animation_main = my.createAnimation({
        duration:400,
        timingFunction:'linear'
      })
      this.animation_back = my.createAnimation({
        duration:400,
        timingFunction:'linear'
      })
  	// 点击正面
 
  	if (id==1) {
      this.animation_main.rotateY(180).step()
      this.animation_back.rotateY(0).step()
      this.setData({
      	animationMain: this.animation_main.export(),
      	animationBack: this.animation_back.export(),
      })
  	}
  	// 点击背面
  	else{
      this.animation_main.rotateY(0).step()
      this.animation_back.rotateY(-180).step()
      this.setData({
      	animationMain: this.animation_main.export(),
      	animationBack: this.animation_back.export(),
      })
    }
  },
  listenMusic() {
    my.confirm({
      title: '温馨提示',
      content: '交通状况不太好哦，来一首歌怎么样',
      confirmButtonText: '好的',
      cancelButtonText: '暂不需要',
      success: (result) => {
        this.setData({
          showMusic:false
        })
        console.log(this.showMusic)
      },
    });
  },

  onReady() {
    //console.log(my.SDKVersion)
      var that = this;
      that.mapCtx = my.createMapContext('busmap');
      that.mapCtx.showsScale({isShowsScale:1});
      that.mapCtx.getCenterLocation({
      success: (res) => {
        my.alert({
          content: 'longitude:' + res.longitude + '\nlatitude:' + res.latitude + '\nscale:' + res.scale,
        });
        console.log("R"+res.longitude);
        console.log("R"+res.latitude);
        console.log("R"+res.scale);
      },
    });
      my.showLoading()
      my.getLocation({
          success(res) {
            my.hideLoading();
            console.log(res)
            that.setData({
              'mapData.longitude':Number(res.longitude),
              'mapData.latitude':Number(res.latitude),
              'mapData.includePoints[0]':{
                longitude:Number(res.longitude),
                latitude:Number(res.latitude),
              }
            })
          },
          fail() {
            my.hideLoading();
            my.alert(Error);
          },
        }).then(function(){console.log(that.data.mapData);
        
        //this.mapCtx.moveToLocation()
      })
    
    /*this.mapCtx.showRoute({
      startLat:30.257839, 
      startLng:120.062726,
      endLat:30.256718,
      endLng:120.059985,
      zIndex:4,
      routeColor:'#FFFFFF',
      iconPath: "/image/map_alr.png",
      iconWidth:10,
      routeWidth:10
     });*/
  },

  onMoreRead(){
    my.navigateTo({ url: './chenchuanzhihou/chenchuanzhihou' })
  },
  moveToLocation() {
    this.mapCtx.moveToLocation()
  },

  regionchange(e) {
    console.log('regionchange', e);
	// 注意：如果缩小或者放大了地图比例尺以后，请在 onRegionChange 函数中重新设置 data 的
	// scale 值，否则会出现拖动地图区域后，重新加载导致地图比例尺又变回缩放前的大小。
	if (e.type === 'end') {
      this.setData({
        scale: e.scale
      });
    }

  },


  //提示气泡操作
  onCloseTap() {
    this.setData({
      showTips: false,
    });
  },
  onRectangleTap() {
    this.setData({
      showTips: false,
    });
  },

  markertap(e) {
    console.log('marker tap', e);
  },
  
  controltap(e) {
    console.log('control tap', e);
    var that=this;
    if(e.controlId==1)
    {
      that.setData({
      'mapData.markers':[{
      id: 1,
      latitude: 30.277478984217407,
      longitude: 120.16466096426012,
      width: 30,
      height: 30,
      iconLayout:{
        params:{
          count:"1"
        },
        src:"./layout/eatmarker_icon.xml"
      },
  	  customCallout:{
        canShowOnTap:true,
        layout:{
          params:{
            title:"KFC",
            bgColor:'#FFFFFF'
          },
        src:"./layout/eatmarker_customcallout.xml"
      },
      /*layoutBubble:{
        style:"bubble",
        bgColor:"#898986",
        borderRadius:0,
        padding:16
      }*/
      }
    },{
      id: 2,
      latitude: 30.277062042300216,
      longitude: 120.1646931507683,
      width: 30,
      height: 30,
      iconLayout:{
        params:{
          count:"1"
        },
        src:"./layout/eatmarker_icon.xml"
      },
  	  customCallout:{
        canShowOnTap:true,
        layout:{
          params:{
            title:"M记",
            bgColor:'#FFFFFF'
          },
        src:"./layout/eatmarker_customcallout.xml"
      },
      /*layoutBubble:{
        style:"bubble",
        bgColor:"#898986",
        borderRadius:0,
        padding:16
      }*/
      }
    }
  ]
  })
    }
    else if(e.controlId==2)
    {
        that.setData({
      'mapData.markers':[{
      id: 1,
      latitude: 30.276691425776114,
      longitude: 120.1632876732445,
      width: 30,
      height: 30,
      iconLayout:{
        params:{
          count:"1"
        },
        src:"./layout/drinkmarker_icon.xml"
      },
  	  customCallout:{
        canShowOnTap:true,
        layout:{
          params:{
            title:"星巴克",
            bgColor:'#FFFFFF'
          },
        src:"./layout/drinkmarker_customcallout.xml"
      },
      /*layoutBubble:{
        style:"bubble",
        bgColor:"#898986",
        borderRadius:0,
        padding:16
      }*/
    }
    }]
  })
    }
    else if(e.controlId==3)
    {
      that.setData({
      'mapData.markers':[{
      id: 1,
      latitude: 30.276691425776114,
      longitude: 120.1632876732445,
      width: 30,
      height: 30,
      iconLayout:{
        params:{
          count:"1"
        },
        src:"./layout/playmarker_icon.xml"
      },
  	  customCallout:{
        canShowOnTap:true,
        layout:{
          params:{
            title:"密室逃脱",
            bgColor:'#FFFFFF'
          },
        src:"./layout/playmarker_customcallout.xml"
      },
      /*layoutBubble:{
        style:"bubble",
        bgColor:"#898986",
        borderRadius:0,
        padding:16
      }*/
    }
    }]
    })
    }
    else if(e.controlId==4)
    {
        that.setData({
      'mapData.markers':[{
      id: 1,
      latitude: 30.27773841385259,
      longitude: 120.16297117258074,
      width: 30,
      height: 30,
      iconLayout:{
        params:{
          count:"1"
        },
        src:"./layout/buymarker_icon.xml"
      },
  	  customCallout:{
        canShowOnTap:true,
        layout:{
          params:{
            title:"银泰百货",
            bgColor:'#FFFFFF'
          },
        src:"./layout/buymarker_customcallout.xml"
      },
      /*layoutBubble:{
        style:"bubble",
        bgColor:"#898986",
        borderRadius:0,
        padding:16
      }*/
    }
    }]
    })
    }
    else if(e.controlId==5)
      {
          that.setData({
        'mapData.scale':18
      })
    }
    else if(e.controlId==6)
      {
          that.setData({
        'mapData.scale':16
      })
    }
    },
    onPanelTap(e) {
    console.log('paneltap:', e);
  },
  
  changeScale() {
    this.setData({
      scale: 8,
    });
  },

  ShowRoute() {
    this.mapCtx.showRoute({
      startLat:30.257839, 
      startLng:120.062726,
      endLat:30.256718,
      endLng:120.059985,
      zIndex:4,
      routeColor:'#FFB90F',
      iconPath: "/image/map_alr.png",
      iconWidth:10,
      routeWidth:10
     });
  },
  calloutTap(e)
  {
    console.log(e);
    if(e.layoutId=="more")
    {
      console.log("111")
      that.setData({
         'showAdv.opacity':1
        })
    }
     else
    {
      var that=this;
      console.log("222")
      if(that.data.showAdv.opacity==0)
      {
        that.setData({
         'showAdv.opacity':1
        })
      }
      console.log(that.data.opacity)
    }
  },

  showDes(){
    my.createSelectorQuery()
    .select('#img').boundingClientRect()
    .selectViewport().scrollOffset().exec((ret) => {
      console.log(ret);
      this.setData({
          x: ret[0].left+50,
          y: ret[0].top-60,
          ringHidden: true
        });
    })
  },
  hideDes(){    
    this.setData({
        ringHidden: false
      });
  },
  moveTab(){
      // my.createSelectorQuery()
      // .select('#img').boundingClientRect()
      // .selectViewport().scrollOffset().exec((ret) => {
      //   console.log(ret);
      //   this.setData({
      //       x: ret[0].left+80,
      //       y: ret[0].top,
      //       ringHidden: true
      //     });
      // })
      this.setData({
          ringHidden: false
      })
  
      // this.setData({
      //     ringHidden: true
      // })

  },
  //隐藏
  hideZanAndPinglun(){
      this.setData({
          ringHidden: false
      })
  },
  createSelectorQuery() {
  my.createSelectorQuery()
    .select('#img').boundingClientRect()
    .selectViewport().scrollOffset().exec((ret) => {
    console.log(ret);
    my.alert({
      // content: JSON.stringify(ret, null, 2).left,
      content: ret[0].top,
    });
  })
  },

  //支持地图不接受手势事件, isGestureEnable为1 表示支持，为0表示不支持
  gestureEnable() {
    this.mapCtx.gestureEnable({isGestureEnable:1});
  },
  
  //地图是否显示比例尺, isShowsScale 为1表示显示，为0表示不显示
  showsScale() {
    this.mapCtx.showsScale({isShowsScale:1});
  },
  //地图是否显示指南针, isShowsCompass 为1表示显示，为0表示不显示
  showsCompass() {
    this.mapCtx.showsCompass({isShowsCompass:1});
  },

  onShow: function()
  {
    /**
     * 防止用户拿不到最新数据(因为页面切换会重新计时)
     * 无条件请求一次最新数据
     */
    console.log('请求接口：刷新数据(无条件执行)')
    /**
     * 每隔一段时间请求服务器刷新数据(客户状态)
     * 当页面显示时开启定时器(开启实时刷新)
     * 每隔1分钟请求刷新一次
     * @注意：用户切换后页面会重新计时
     */
    
    var that=this;
    var lng=0;
    var lat=0;
    var newpoint;
    var pointdata=that.data.mapData.polyline[0].points;
    var i=1;
    setInterval(function()
    { 
         that.mapCtx.getCenterLocation(function(res) {
        console.log(res.longitude)
        console.log(res.latitude)
        })
       my.getLocation({
          success(res) {
            my.hideLoading();
            lng=Number(res.longitude);
            lat=Number(res.latitude);
            console.log(lng+' '+lat)
             /* that.setData({
              'mapData.longitude':Number(res.longitude),
              'mapData.latitude':Number(res.latitude),
              'mapData.includePoints[0]':{
                longitude:Number(res.longitude),
                latitude:Number(res.latitude),
              }
            })*/
          },
          fail() {
            my.hideLoading();
            console.log(Error);
          },
        }).then(function(){
          newpoint={
          longitude:lng,
          latitude:lat
        };
        console.log(newpoint);
        
        let key='mapData.polyline[0].points';
       // pointdata=that.data.mapData.polyline[0].points;
        //let pointdata=JSON.parse(JSON.stringify(that.data.mapData.polyline.points));
        console.log(pointdata);
        if(newpoint.latitude!=0&&newpoint.longitude!=0)
        {pointdata.push(newpoint);
        console.log(pointdata);
        that.setData({
         [key]:pointdata
        });
        i++;
        console.log(i);
        }
        }).then(function(){
          console.log(that.data.mapData.polyline[0].points[i])
          //that.mapCtx = my.createMapContext('busmap');
        // that.mapCtx.moveToLocation()
        })
      // 请求服务器数据
      // 反馈提示
    }, 20000)//间隔时间
    // 更新数据
    /*this.setData({
      realTime:this.data.realTime,//实时数据对象(用于关闭实时刷新方法)
    })*/
  },
})

import * as OASIS from "oasis-engine/dist/miniprogram";
import { registerCanvas } from "@oasis-engine/miniprogram-adapter";
import { Camera, GLTFResource, WebGLEngine, BackgroundMode} from "oasis-engine";
import { OrbitControl } from "@oasis-engine/controls";

Page({
  data: {
    showPop: false,
    currentBag:"letter",
    letter: 
    [
      {
        animationMain:null,//正面
        animationBack:null,//背面
      },
      {
        animationMain:null,//正面
        animationBack:null,//背面
      },
      {
        animationMain:null,//正面
        animationBack:null,//背面
      },
      {
        animationMain:null,//正面
        animationBack:null,//背面
      }
    ],

  indicatorDots: false,
  autoplay: false,
  vertical: false,
  interval: 1000,
  circular: false,
  swiperIndex: 0,
  },


  rotateFn(e) {
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    var that = this.data.letter;

    that[index].animation_main = my.createAnimation({
      duration:400,
      timingFunction:'linear'
    })
    that[index].animation_back = my.createAnimation({
      duration:400,
      timingFunction:'linear'
    })

    console.log(that[index])
    
    const cards = that;
    // 点击正面
    
    if (id==1) {
      that[index].animation_main.rotateY(180).step()
      that[index].animation_back.rotateY(0).step()
      cards[index].animationMain = that[index].animation_main.export()
      cards[index].animationBack = that[index].animation_back.export()
      this.setData({
        cards: cards
      })
      console.log("1")
    }
    // 点击背面
    else{
      that[index].animation_main.rotateY(0).step()
      that[index].animation_back.rotateY(-180).step()
      cards[index].animationMain = that[index].animation_main.export()
      cards[index].animationBack = that[index].animation_back.export()
      this.setData({
        cards: cards
      })
      console.log("2")
    }
  },

  onItemClick(e){
    var id = e.currentTarget.dataset.id;
    if(id=="0"){
      console.log("all")
      this.setData({
        currentBag:"All"
      });
    }
    if(id=="1"){
      this.setData({
        currentBag:"letter"
      });
    }
    if(id=="2"){
      this.setData({
        currentBag:"photo"
      });
    }
  },

  onTopBtnTap() {
    this.setData({
      showPop: true,
    });
  },
  onPopupClose() {
    this.setData({
      showPop: false,
   });
  },
  
  swiperChange(e) {
    const that = this;
    that.setData({
      swiperIndex: e.detail.current,
    })
  },

  //创建新收藏夹
  newFloder(){
    my.prompt({
    title: '新建收藏夹',
    message: '请输入自定义收藏夹名字',
    placeholder: '收藏夹名',
    okButtonText: '确定',
    cancelButtonText: '取消',
    success: (result) => {
      console.log(result)
      if(result.ok==false){}
      if(result.ok==true){
        my.alert({
          title: "创建成功",
        });
      }  
    },
    });
  },

    onCanvasReady() {
		my._createCanvas({
			id: "canvas",
			success: (canvas) => {
        // 注册 canvas 
				registerCanvas(canvas,"canvas", 7.6, 4);
        const engine = new OASIS.WebGLEngine(canvas);
        console.log(engine.canvas)

        const rootEntity = engine.sceneManager.activeScene.createRootEntity();

        const cameraEntity = rootEntity.createChild("camera");
        cameraEntity.addComponent(Camera);
        cameraEntity.transform.setPosition(18, 18, 18);
        let controler = cameraEntity.addComponent(OrbitControl);
        controler.autoRotate = true;
        controler.autoRotateSpeed = Math.PI / 8;

        const scene = engine.sceneManager.activeScene;
        const { background } = scene;

        // 添加纯色背景
        background.mode = BackgroundMode.SolidColor; // 默认纯色背景
        background.solidColor.setValue(1, 1, 1, 1); // 纯白色
        // engine.sceneManager.activeScene.ambientLight.diffuseSolidColor.setValue(1, 1, 1, 1);

        const ambientLight = scene.ambientLight;
        // 设置环境光颜色
        ambientLight.diffuseSolidColor.setValue(1, 1, 1, 1);
        // 设置环境光强度
        ambientLight.diffuseIntensity = 1;

        engine.resourceManager
          .load("http://127.0.0.1/model/bugatti.glb")
          .then((gltf) => {
            rootEntity.addChild(gltf.defaultSceneRoot);
            console.log("加载完成")
          });
        engine.run();
      },
		});
	},

  onMoreRead(){
    my.navigateTo({ url: './chenchuanzhihou/chenchuanzhihou' })
  },

  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    // .js
  },

  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
});

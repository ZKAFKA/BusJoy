if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;


if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/value-module/value-module?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tabbar/tabbar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/searchbar/searchbar?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../components/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/search-bar/search-bar?hash=44d5caf4be7ad60d97df42065a426e4e236bc1d2');
require('../../components/searchbar/collapse-item/index?hash=b592da175a5dbeb8bcd0dae467a54b92fa293000');
require('../../node_modules/mini-ali-ui/es/loading/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/index?hash=e1617a0257fb9de746f60d50b03404ad924976c9');
require('../../node_modules/mini-ali-ui/es/list/auto-size-img/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/list-item/index?hash=a5465b8c889360e3f854461d3ac41cf414aec633');
require('../../components/card/card?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/station/station?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/badge/badge?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/mytab/mytab?hash=277010db3a3baedb0d863cce08481f553d10aba9');
require('../../components/mytab/mytab-content/mytab-content?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/newsinfo/newsinfo?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/collapse/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../node_modules/mini-ali-ui/es/collapse/collapse-item/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/tabs/index?hash=4a98b35daa3eee1b62960d4d5bbcbf254cbf11e3');
require('../../node_modules/mini-ali-ui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/search-bar/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=4eee3b98d3f4893dc5e1e33a8872e6fec2dd3f18');
require('../../pages/onbus/onbus?hash=63139cb3944d7ab0d5c1e9c6b48c3da65032b975');
require('../../pages/my/my?hash=61404b84937b881afeb55871c1718db771b9dbb9');
require('../../pages/square/square?hash=a773fc08190b0f4ef7d8a23fd63ba1a61336560d');
require('../../pages/my/signin/signin?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/record/record?hash=9d83a615ce5b871850ea4f92cabb2c24dc7e93c1');
require('../../pages/my/discount/discount?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/rank/rank?hash=9d83a615ce5b871850ea4f92cabb2c24dc7e93c1');
require('../../pages/my/friendcircle/friendcircle?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cardbag/cardbag?hash=5bbd96f25f5f29c64c8068e1bd236075ebf9326d');
require('../../pages/cardbag/chenchuanzhihou/chenchuanzhihou?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/onbus/chenchuanzhihou/chenchuanzhihou?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}
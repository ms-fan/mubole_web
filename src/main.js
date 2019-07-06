import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store' //引入store
// 引入vue-amap
import AMap from 'vue-amap'
Vue.use(AMap)
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: '9cc1cb3ed4c140f6945d80dec47528f4',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store, //使用store
  components: { App },
  template: '<App/>'
})

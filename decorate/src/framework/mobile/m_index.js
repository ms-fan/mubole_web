// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/mobile/index'
import animate from 'animate.css'
import '@/assets/css/global.css' /*引入公共样式*/
import { Lazyload } from 'vant';
// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.use(animate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

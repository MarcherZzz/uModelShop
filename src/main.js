// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
Vue.config.productionTip = false

// 引入rem
import './assets/js/remscale'
// 重置样式
import './assets/css/reset.css'
// 引入vant
import VantUI from 'vant'
Vue.use(VantUI);
import 'vant/lib/index.css'

//引入矢量图标
import './assets/font/iconfont.css'
Vue.config.productionTip = false
// 在原型上挂载一个服务器
Vue.prototype.$imgUrl='http://localhost:3000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

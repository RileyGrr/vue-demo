// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'
import ElementUI from 'element-ui'
import 'lib-flexible/flexible.js'
// import Vant from 'vant'
// import 'vant/lib/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import loading from './components/loading' //引入全局loading动画

Vue.use(loading)
Vue.use(ElementUI)
// Vue.use(Vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})

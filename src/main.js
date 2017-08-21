import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import global from '@/global.js'

Vue.use(VueResource)

Vue.config.productionTip = false

Vue.prototype.$global = global

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

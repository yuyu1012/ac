import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import 'lib-flexible/flexible'
import http from './http'
Vue.prototype.$http = http
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

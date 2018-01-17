// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(router)
/* eslint-disable no-new */
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

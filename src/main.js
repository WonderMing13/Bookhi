// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from '@/components/layout'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.use(ElementUI)

Vue.use(Vuex)

axios.defaults.headers['Access-Control-Allow-Origin: *'] 
Vue.prototype.$ajax = axios



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})

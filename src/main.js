import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from './plugins/axios'
Vue.use(axios);

import loading from './common/loading'
Vue.use(loading);

import './registerServiceWorker'

Vue.config.productionTip = false

import './assets/fonts/iconfont.css'
import './assets/css/base.css'
import './assets/css/style.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

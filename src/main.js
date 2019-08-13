import Vue from 'vue'
import App from './App.vue'
import {router} from './router/routes'
import {store} from './store/index'


import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  el:'#app',

  render: h => h(App),
  router,
  store


}).$mount('#app')



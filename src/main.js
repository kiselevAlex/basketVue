// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/animate.css'
import './assets/css/media.css'
import './assets/css/cart.css'
import {DEBUG} from '@/consts/api'

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

if (DEBUG){
    require('./assets/bootstrap4/css/bootstrap.css');
    require('./assets/bootstrap4/css/bootstrap-grid.css');
    require('./assets/bootstrap4/css/bootstrap-reboot.css');
    require('./assets/bootstrap4/js/bootstrap');
    require('./assets/bootstrap4/js/bootstrap.bundle');
    require('./assets/css/styles.css');
}


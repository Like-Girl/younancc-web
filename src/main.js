// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/plugins/modernizr/modernizr.js'
import './assets/plugins/jquery-cookie/jquery.cookie.js'
import './assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js'
import './assets/plugins/switchery/switchery.min.js'
import './assets/plugins/Chart.js/Chart.min.js'
import './assets/plugins/jquery.sparkline/jquery.sparkline.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

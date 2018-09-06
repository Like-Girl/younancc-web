// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/plugins/fontawesome/css/font-awesome.min.css'
import './assets/plugins/themify-icons/themify-icons.min.css'
import './assets/plugins/animate.css/animate.min.css'
import './assets/plugins/perfect-scrollbar/perfect-scrollbar.min.css'
import './assets/plugins/switchery/switchery.min.css'
import './assets/css/styles.css'
import './assets/css/plugins.css'
import './assets/css/themes/theme-1.css'

import 'bootstrap/dist/js/bootstrap.min.js'
// import './assets/plugins/modernizr/modernizr.js'
import './assets/plugins/jquery-cookie/jquery.cookie.js'
import './assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js'
import './assets/plugins/switchery/switchery.min.js'
import './assets/plugins/Chart.js/Chart.min.js'
import './assets/plugins/jquery.sparkline/jquery.sparkline.min.js'
import './assets/plugins/jquery-validation/jquery.validate.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

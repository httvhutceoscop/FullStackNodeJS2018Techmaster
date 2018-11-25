/**
 * Khoá học FullStackNodejs Techmaster 2018
 * Instructor: Nguyễn Đức Hoàng
 * Youtube: https://www.youtube.com/c/nguyenduchoang
 */
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
Vue.config.productionTip = false
//router 
//yarn add vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from '@/router/router'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
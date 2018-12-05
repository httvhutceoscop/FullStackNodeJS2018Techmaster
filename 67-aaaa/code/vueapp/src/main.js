/**
 * Khoá học FullStackNodejs Techmaster 2018
 * Instructor: Nguyễn Đức Hoàng
 * Youtube: https://www.youtube.com/c/nguyenduchoang
 * Bài này sẽ chia Login và "Home" thành các "router" = link
 */
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueSession from 'vue-session'
Vue.use(VueSession)
//Chúng ta cần tạo ra 1 đối tượng router bao lấy các màn: Home, Login,...
import router from '@/router/router'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

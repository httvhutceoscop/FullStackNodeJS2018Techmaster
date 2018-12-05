/*
  Khoá học FullStackNodejs Techmaster 2018
 * Instructor: Nguyễn Đức Hoàng
 * Youtube: https://www.youtube.com/c/nguyenduchoang
 * File này chứa thông tin các router
 */
import Login from '@/components/Login'
import Home from '@/components/Home'//Home ở đâu ?
import VueRouter from 'vue-router'
const routes = [
    { path:'/Login', component: Login },
    { path: '/', component: Home }
]
export default new VueRouter({routes})
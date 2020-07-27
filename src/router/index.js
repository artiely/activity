import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import{isSetting} from '@config'
Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]
if (isSetting) {
  routes.push({
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  })
}
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router

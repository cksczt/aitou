import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import Home from '../views/Home.vue'

Vue.use(IonicVueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newgood',
    name: 'NewGood',
    component: () => import('../views/goods/NewGood.vue')
  },
  {
    path: '/showgood',
    name: 'ShowGood',
    component: () => import('../views/goods/ShowGood.vue')
  }
]

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

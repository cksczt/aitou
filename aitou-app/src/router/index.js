import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import Favorite from '../views/Favorite.vue'
import Settings from '../views/Settings.vue'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: Index,
      children: [
        {
          path: '',
          component: Home
        }, {
          path: 'favorite',
          component: Favorite
        }, {
          path: 'settings',
          component: Settings
        }
      ]
    }, {
      path: '/new-good',
      component: () => import('../views/goods/NewGood.vue')
    }, {
      path: '/show-good',
      component: () => import('../views/goods/ShowGood.vue')
    }
  ]
})

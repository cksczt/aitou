import Vue from 'vue'
import Viewer from 'v-viewer'
import App from './App.vue'
import router from './router'
import store from './store'
import Ionic from '@ionic/vue'
import './registerServiceWorker'
import './plugins/ionic.js'

Vue.use(Ionic)
Vue.use(Viewer, { name: 'viewer' })
Vue.directive('viewer', Viewer)
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

new Vue({
  el: '#app',
  router,
  store,
  Ionic,
  Viewer,
  render: h => h(App)
}).$mount('#app')

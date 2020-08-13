import Vue from 'vue'
import Viewer from 'v-viewer'
import App from './App.vue'
import router from './router'
import store from './store'
import Ionic from '@ionic/vue'
import './registerServiceWorker'
import './plugins/ionic.js'
import { defineCustomElements } from '@ionic/pwa-elements/loader'

import 'viewerjs/dist/viewer.css'

Vue.use(Ionic, Viewer)
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

new Vue({
  router,
  store,
  Ionic,
  Viewer,
  render: h => h(App)
}).$mount('#app')

defineCustomElements(window)

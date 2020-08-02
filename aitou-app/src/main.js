import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ionic from '@ionic/vue'
import './registerServiceWorker'
import './plugins/ionic.js'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

new Vue({
  router,
  store,
  Ionic,
  render: h => h(App)
}).$mount('#app')

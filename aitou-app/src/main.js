import Vue from 'vue'
import Viewer from 'v-viewer'
import App from './App.vue'
import router from './router'
import store from './store'
import Ionic from '@ionic/vue'
import './registerServiceWorker'
import './plugins/ionic.js'

Vue.use(Viewer, Ionic)
new Vue({
  el: '#app',
  router,
  store,
  Viewer,
  Ionic,
  render: h => h(App)
}).$mount('#app')

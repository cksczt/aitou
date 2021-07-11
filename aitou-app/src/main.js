/** 项目的入口文件 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import Viewer from 'v-viewer';
import App from './App.vue';
/** 引入router变量 */
import router from './router';
import store from './store';
import Ionic from '@ionic/vue';
import './registerServiceWorker';
import './plugins/ionic.js';

Vue.use(ElementUI, Viewer, Ionic);
new Vue({
  /* 挂载在id=app的div元素上 */
  el: '#app',
  /* 使用router变量 router：router */
  router,
  store,
  Viewer,
  Ionic,
  /* 将App局部组件显示在页面上 */
  render: h => h(App)
}).$mount('#app');

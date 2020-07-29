import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import 'animate.css';


Vue.use(PerfectScrollbar);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  PerfectScrollbar,
  render: h => h(App)
}).$mount('#app');

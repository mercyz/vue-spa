import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';
import '@/assets/css/custom.css';
import router  from './routes.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

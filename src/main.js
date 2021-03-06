import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router/router';
import store from './store/store';

// Import global css file
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

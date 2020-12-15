import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueCarousel from 'vue-carousel';

Vue.use(Buefy);
Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')

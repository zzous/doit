import '@babel/polyfill'
import 'mutationobserver-shim'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import './common/plugins/bootstrap-vue'
import App from './App.vue'
import router from './router';
import "./router/routerGuard";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'


Vue.config.productionTip = false
Vue.component('VueSlickCarousel', VueSlickCarousel);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

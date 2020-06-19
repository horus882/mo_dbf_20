import Vue from 'vue'
import App from './App.vue'

import VueAnime from './vue-anime';
Vue.use(VueAnime);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'vue-flash-message/dist/vue-flash-message.min.css'
// import VueResource from "vue-resource"
import axios from 'axios';
import VueAxios from 'vue-axios';
axios.defaults.baseURL = 'http://localhost:8000/api';
import VueFlashMessage from 'vue-flash-message';
Vue.config.productionTip = false
// var VueResource = require('vue-resource');

// let colorPrimary = {
//   color: 'green',
//   hue: 700,
//   hexa: '#42b883'
// }

// let colorAccent = {
//   color: 'blue',
//   hue: 600,
//   hexa: '#35495e'
// }
Vue.use(VueAxios, axios);
// Vue.use(VueResource);
Vue.use(VueMaterial)
Vue.use(VueFlashMessage);

// Vue.material.registerTheme('default', {
//   primary: colorPrimary,
//   accent: colorAccent,
//   warn: colorPrimary,
//   background: 'white'
// })

// Vue.material.setCurrentTheme('default')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

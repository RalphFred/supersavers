import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from './store'
import Toast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'
import i18n from './i18n'

Vue.config.productionTip = false

// Install the toast plugin
Vue.use(Toast)

new Vue({
  render: h => h(App),
  router,
  store,
  i18n
}).$mount("#app");
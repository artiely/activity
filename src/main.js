import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "mand-mobile/components/_style/global.styl";
import "normalize.css";
import "tool.less"
import {Api} from '@/api'
Vue.use(Api)
Vue.config.productionTip = false
import { Button, Toast } from "mand-mobile";
Vue.component(Button.name, Button)
Vue.component(Toast.name, Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

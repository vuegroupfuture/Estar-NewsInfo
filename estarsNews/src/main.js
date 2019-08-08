import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/icon/iconfont.css'
import {Search , DatetimePicker} from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.component(Search.name, Search)
Vue.component(DatetimePicker.name,DatetimePicker)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

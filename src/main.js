import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import '../lib/mui/dist/css/mui.min.css'
import '../lib/mui/dist/css/icons-extra.css'
import '../lib/mui/dist/fonts/mui-icons-extra.ttf'
import Router from "vue-router";
import VueResource from 'vue-resource';




Vue.use(VueResource);


Vue.use(Router)

Vue.use(MintUI)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import '../lib/mui/dist/css/mui.min.css'
import Router from "vue-router";
import VueResource from 'vue-resource';


Vue.use(VueResource);


Vue.use(Router)

Vue.use(MintUI)



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

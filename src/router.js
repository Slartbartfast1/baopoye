import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import news from './components/news.vue'
import newsContent from './components/newsContent.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
      path: '/news',
      name: 'news',
      component: news
    },
      {
      path: '/newsContent',
      name: 'newsContent',
      component: newsContent
    },

  ],
    linkActiveClass:'mui-active'
})

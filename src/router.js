import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import news from './components/news.vue'
import newsContent from './components/newsContent.vue'
import myBlog from './components/myBlog.vue'
import todo from './components/todo.vue'
import admin from './components/admin.vue'
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
      {
      path: '/myBlog',
      name: 'myBlog',
      component: myBlog
    },
      {
      path: '/todo',
      name: 'todo',
      component: todo
    },
      {
          path: '/admin',
          name: 'admin',
          component: admin
      },

  ],
    linkActiveClass:'mui-active'
})

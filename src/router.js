import Home from './views/Home.vue'
import Router from 'vue-router'
import Vue from 'vue'

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
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: () => import('./views/Calendar.vue')
    }
  ]
})

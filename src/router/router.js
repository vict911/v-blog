import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Disc from '@/pages/disc/disc'
import Memory from '@/pages/memory/memory'

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
      path: '/disc',
      name: 'disc',
      component: Disc
    },
    {
      path: '/memory',
      name: 'memory',
      component: Memory
    },
  ]
})

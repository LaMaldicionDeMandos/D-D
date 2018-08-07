import Vue from 'vue'
import Router from 'vue-router'
import Steps from '@/components/Steps'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'steps',
      component: Steps
    }
  ]
})

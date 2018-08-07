import Vue from 'vue'
import Router from 'vue-router'
import NameStep from '@/components/NameStep'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/step/1'
    },
    {
      path: '/step/1',
      name: 'name-step',
      component: NameStep
    }
  ]
})

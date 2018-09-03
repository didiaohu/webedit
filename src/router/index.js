import Vue from 'vue'
import Router from 'vue-router'
import edit from '@/pages/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'edit',
      component: edit
    }
  ]
})

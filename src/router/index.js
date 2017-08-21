import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import NoteDetails from '@/components/NoteDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/:id',
      component: NoteDetails
    }
  ]
})

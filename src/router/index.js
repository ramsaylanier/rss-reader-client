import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import FeedCreate from '@/components/feed/create/container'
import FeedShow from '@/components/feed/show/container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create-feed',
      name: 'CreateFeed',
      component: FeedCreate
    },
    {
      path: '/feed/:id',
      name: 'FeedShow',
      component: FeedShow
    }
  ]
})

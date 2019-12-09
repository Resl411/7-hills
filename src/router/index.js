/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import start from '../views/Start'
import home from '../views/Home.vue'
import tours from '../views/Tours.vue'
import arrived from '../views/Arrived.vue'
import stats from '../views/Stats'
import quiz from '../views/Quiz'
import about from '../views/About'
import detailstour from '../views/DetailsTour.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/',
    name: 'start',
    component: start
    
  }, 
  {
    path: '/tours',
    name: 'tours',
    component: tours
    
  },
  {
    path: '/arrived',
    name: 'arrived',
    component: arrived
    
  }, 
  {
    path: '/stats',
    name: 'stats',
    component: stats
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: quiz
  },
  {
    path: '/aboutus',
    name: 'about',
    component: about
  },
  {
    path: '/detailstour',
    name: 'detailstour',
    component: detailstour
  }
  
]

const router = new VueRouter({
  routes
})

export default router


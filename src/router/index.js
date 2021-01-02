import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'

import MemoriesPage from '../pages/MemoriesPage'

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    name: 'memories-page',
    component: MemoriesPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

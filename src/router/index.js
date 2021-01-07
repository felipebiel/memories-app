import { createRouter, createWebHistory } from '@ionic/vue-router';
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
  },
  {
    path: '/memories/add',
    component: () => import('../pages/AddMemoryPage')
  },
  {
    path: '/memories/:id',
    component: () => import('../pages/MemoriesDetails')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

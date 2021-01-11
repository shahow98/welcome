import { createRouter, createWebHashHistory } from 'vue-router'
import screensaver from '@/components/services/screensaver.vue'

const routes = [
  {
    path: '/',
    name: 'screensaver',
    component: screensaver
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/services/home.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

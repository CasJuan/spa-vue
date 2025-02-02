import HomePage from '@/modules/landing/pages/HomePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('../modules/landing/pages/FaturePages.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../modules/landing/pages/PricePage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../modules/landing/pages/ContactPage.vue'),
    },
  ],
})

export default router

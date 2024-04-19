import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/signupView.vue')

    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    }
  ]
})

export default router

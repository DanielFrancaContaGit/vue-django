import { createRouter, createWebHistory } from 'vue-router'
import { useAuthenticationStore } from '@/stores/authentication'

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
  ],

})

router.beforeEach((to) => {
  const auth = useAuthenticationStore()

  if (to.name !== "home" && to.name !== "signup" && !auth.isAuthenticated) {
    return { name: 'home' }
  }
})

export default router

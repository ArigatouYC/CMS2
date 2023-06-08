import { createRouter, createWebHistory } from 'vue-router'
import ErrPage from '@/views/ErrPage/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Home
    {
      path: '/',
      component: () => import('@/views/Home/index.vue'),
      children: [
        {
          path: '',
          name: 'main',
          component: () => import('@/views/Main/index.vue'),
        },
      ]
    },
    //ErrPage
    {
      path: "/errPage",
      component: ErrPage,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/errPage",
    },
    //Login
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue'),
    }
  ]
})

export default router

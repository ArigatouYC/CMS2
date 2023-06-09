import { createRouter, createWebHistory } from 'vue-router'
import ErrPage from '@/views/ErrPage/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Home
    {
      path: '/',
      component: () => import('@/views/Home/index.vue'),
      name: 'home',
      children: [
        {
          path: '',
          name: 'main',
          component: () => import('@/views/Main/index.vue'),
        },
        // 权限管理
        {
          path: "/usermanagement",
          component: () => import('@/views/aclManagement/userManagement/index.vue'),
        },
        {
          path: "/rolemanagement",
          component: () => import('@/views/aclManagement/roleManagement/index.vue'),
        },
        {
          path: "/menumanagement",
          component: () => import('@/views/aclManagement/menuManagement/index.vue'),
        },

        // 商品管理
        {
          path: "/goodsmanagement1",
          component: () => import('@/views/goodsManagement/goodsManagement1/index.vue'),
        },
        {
          path: "/goodsmanagement2",
          component: () => import('@/views/goodsManagement/goodsManagement2/index.vue'),
        },
        {
          path: "/goodsmanagement3",
          component: () => import('@/views/goodsManagement/goodsManagement3/index.vue'),
        },
        {
          path: "/datascreen",
          component: () => import('@/views/dataScreen/index.vue'),
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

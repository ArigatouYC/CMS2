import { createRouter, createWebHistory } from 'vue-router'
import ErrPage from '@/views/ErrPage/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Home
    {
      path: '/',
      component: () => import('@/views/Home/index.vue'),
      name: '管理',
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
          name: '用户管理'
        },
        {
          path: "/rolemanagement",
          component: () => import('@/views/aclManagement/roleManagement/index.vue'),
          name: '角色管理'
        },
        {
          path: "/menumanagement",
          component: () => import('@/views/aclManagement/menuManagement/index.vue'),
          name: '目录管理'
        },

        // 商品管理
        {
          path: "/goodsmanagement1",
          component: () => import('@/views/goodsManagement/goodsManagement1/index.vue'),
          name: '商品管理1'
        },
        {
          path: "/goodsmanagement2",
          component: () => import('@/views/goodsManagement/goodsManagement2/index.vue'),
          name: '商品管理2'
        },
        {
          path: "/goodsmanagement3",
          component: () => import('@/views/goodsManagement/goodsManagement3/index.vue'),
          name: '商品管理3'
        },
        {
          path: "/datascreen",
          component: () => import('@/views/dataScreen/index.vue'),
          name: '数据大屏'
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

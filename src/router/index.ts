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
          name: '主页',
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
          path: "/brandmanagement",
          component: () => import('@/views/goodsManagement/brandmanagement/index.vue'),
          name: '品牌管理'
        },
        {
          path: "/attributesmanagement",
          component: () => import('@/views/goodsManagement/attributesmanagement/index.vue'),
          name: '属性管理'
        },
        {
          path: "/skumanagement",
          component: () => import('@/views/goodsManagement/skumanagement/index.vue'),
          name: 'SKU管理'
        },
        {
          path: "/spumanagement",
          component: () => import('@/views/goodsManagement/spumanagement/index.vue'),
          name: 'SPU管理'
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

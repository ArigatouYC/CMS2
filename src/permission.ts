// import router from '@/router'
// //@ts-ignore
// import nprogress from 'nprogress'

// import pinia from './stores';
// import userStore_ from "@/stores/modules/user";

// import 'nprogress/nprogress.css'

// import { GET_TOKEN } from "@/utils/token";


// let userStore = userStore_(pinia)

// let token = GET_TOKEN()
// let username = userStore.username


// router.beforeEach((to, from, next) => {
//   nprogress.start();
//   if (token) {
//     if (to.path == '/login') {
//       next({ path: '/' })
//     } else {
//       if (username) {
//         next()
//       } else {
//         try {
//           userStore.getUserInfo()
//           next()
//         } catch (error) {
//           userStore.userLoginOut();
//           next({ path: '/login' })
//         }

//       }

//     }
//   } else {
//     //!!!!!!!!!!!!!!!!!!!!!!!!是== 不能写=！！！！！！！！！！！！
//     if (to.path == '/login') {
//       next()
//     } else {
//       next({ path: '/login' })
//     }

//   }
// })

// router.afterEach((to, from) => {
//   nprogress.done();
// })

//路由鉴权:鉴权,项目当中路由能不能被的权限的设置(某一个路由什么条件下可以访问、什么条件下不可以访问)
import router from '@/router'
//@ts-ignore
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
//获取用户相关的小仓库内部token数据,去判断用户是否登录成功
import useUserStore from '@/stores/modules/user'
import pinia from './stores'
const userStore = useUserStore(pinia)
//全局守卫:项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  //to:你将要访问那个路由
  //from:你从来个路由而来
  //next:路由的放行函数
  nprogress.start()
  //获取token,去判断用户登录、还是未登录
  const token = userStore.token
  //获取用户名字
  const username = userStore.username
  //用户登录判断
  if (token) {
    //登录成功,访问login,不能访问,指向首页
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      //登录成功访问其余六个路由(登录排除)
      //有用户信息
      if (username) {
        //放行
        next()
      } else {
        //如果没有用户信息,在守卫这里发请求获取到了用户信息再放行
        try {
          //获取用户信息
          await userStore.getUserInfo()
          //放行
          //万一:刷新的时候是异步路由,有可能获取到用户信息、异步路由还没有加载完毕,出现空白的效果
          next({ ...to })
        } catch (error) {
          //token过期:获取不到用户信息了
          //用户手动修改本地存储token
          //退出登录->用户相关的数据清空
          await userStore.userLoginOut()
          next({ path: '/login' })
        }
      }
    }
  } else {
    //用户未登录判断
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})
//全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done()
})

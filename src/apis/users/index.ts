//模拟接口
// //统一管理项目用户相关的接口
// import request from '@/utils/request'

// import type {
//   loginForm,
//   loginResponseData,
//   userInfoReponseData,
// } from './type'

// //项目用户相关的请求地址
// enum API {
//   LOGIN_URL = '/user/login',
//   USERINFO_URL = '/user/info',
//   LOGOUT_URL = '/admin/acl/index/logout',
//   SENTENCE = 'https://v.api.aa1.cn/api/yiyan/index.php'
// }

// //登录接口
// export const reqLogin = (data: loginForm) =>
//   request.post<any, loginResponseData>(API.LOGIN_URL, data)
// //获取用户信息
// export const reqUserInfo = () =>
//   request.get<any, userInfoReponseData>(API.USERINFO_URL)
// //退出登录
// export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)

// //每日一言
// export const getSentence = () => request.get<any, any>(API.SENTENCE)

// 真接口
//统一管理项目用户相关的接口
import request from '@/utils/request'
import type { loginForm, loginResponseData, userInfoReponseData } from './type'
//项目用户相关的请求地址
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',

  SENTENCE_URL = 'https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json'
}

//登录接口
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
//获取用户信息
export const reqUserInfo = () => request.get<any, userInfoReponseData>(API.USERINFO_URL)
//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)

export const getSentence = () => request.get<any, any>(API.SENTENCE_URL)

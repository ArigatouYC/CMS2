import { defineStore } from 'pinia'

import { reqLogin, reqUserInfo, reqLogout } from '@/apis/users/index'
import type { loginForm } from '@/apis/users/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

const userStore = defineStore('User', {
  state: () => {
    return {
      token: GET_TOKEN(),
      username: '',
      avatar: ''
    }
  },

  actions: {
    async userLogin(data: loginForm) {
      const result: any = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data as string
        SET_TOKEN(result.data as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    async getUserInfo() {
      const result = await reqUserInfo()
      if (result.code == 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
      }
    },

    async userLoginOut() {
      const result = await reqLogout()
      if (result.code == 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        localStorage.removeItem('TOKEN')
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    }
  },

  getters: {}
})

export default userStore

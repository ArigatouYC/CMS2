import { defineStore } from "pinia";

import { reqLogin, reqUserInfo, reqLogout } from "@/apis/users/index";
import type { loginForm } from "@/apis/users/type";
import { SET_TOKEN, GET_TOKEN } from "@/utils/token";


let userStore = defineStore('User', {
    state: () => {
        return {
            token: GET_TOKEN(),
            username: '',
            avatar: '',
        }
    },

    actions: {
        async userLogin(data: loginForm) {
            let result: any = await reqLogin(data)
            if (result.code == 200) {
                this.token = (result.data as string)
                SET_TOKEN(result.data as string)
                return "ok"
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        async getUserInfo() {
            let result = await reqUserInfo();
            if (result.code == 200) {
                this.username = result.data.name
                this.avatar = result.data.avatar
            }
        },

        async userLoginOut() {
            let result = await reqLogout();
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



    getters: {

    }
})

export default userStore




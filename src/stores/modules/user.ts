import { defineStore } from "pinia";
import { reqLogin } from "@/apis/users/index";
import { reqUserInfo } from "@/apis/users/index";
import type { loginForm } from "@/apis/users/type";
import { SET_TOKEN, GET_TOKEN } from "@/utils/token";


let userStore = defineStore('User', {
    state: () => {
        return {
            token: GET_TOKEN(),
            username: '',
            avatar: '',
            isLogin: false
        }
    },

    actions: {
        async userLogin(data: loginForm) {
            let result: any = await reqLogin(data)
            if (result.code == 200) {
                // console.log(result);
                this.token = result.data.token
                this.isLogin = true
                SET_TOKEN(result.data.token)
                return "success"
            } else {
                this.isLogin = false
                return Promise.reject(new Error("fail"))
            }
        },
        async getUserInfo() {
            let result = await reqUserInfo();
            if (result.code == 200) {
                this.username = result.data.checkUser.username
                this.avatar = result.data.checkUser.avatar
            }
        },

        userLoginOut() {
            this.token = ''
            this.username = ''
            this.avatar = ''
            localStorage.removeItem('TOKEN')
        }
    },

    getters: {

    }
})

export default userStore
import { defineStore } from "pinia";
import { reqLogin } from "@/apis/users/index";

import type { loginForm } from "@/apis/users/type";

import { SET_TOKEN, GET_TOKEN } from "@/utils/token";


let userStore = defineStore('User', {
    state: () => {
        return {
            token: GET_TOKEN(),
        }
    },


    actions: {
        async userLogin(data: loginForm) {
            let result: any = await reqLogin(data)
            if (result.code == 200) {
                // console.log(result);
                this.token = result.data.token
                SET_TOKEN(result.data.token)
                return "success"
            } else {
                return Promise.reject(new Error("fail"))
            }
        }

    },

    getters: {

    }
})

export default userStore
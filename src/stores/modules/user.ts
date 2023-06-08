import { defineStore } from "pinia";
import { reqLogin } from "@/apis/users/index";

import type { loginForm } from "@/apis/users/type";

let userStore = defineStore('User', {
    state: () => {
        return {
            token: localStorage.getItem("TOKEN"),
        }
    },

    actions: {
        async userLogin(data: loginForm) {
            let result = await reqLogin(data)
            console.log(result);
        }

    },

    getters: {

    }
})

export default userStore
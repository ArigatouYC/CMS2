import { defineStore } from "pinia";

import { ref } from 'vue'

let userStore = defineStore('iss', {
    state: () => {
        return {
            isCollapse: ref(false)
        }
    },

    actions: {

    },

    getters: {

    }
})

export default userStore
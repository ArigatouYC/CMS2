import { defineStore } from 'pinia'
import { ref } from 'vue'

const darkStatus = defineStore('isdark', {
    state: () => {
        return {
            isdark: ref(false)
        }
    }
})

export default darkStatus
import { defineStore } from "pinia";
import { ref } from "vue";

let refshStatus = defineStore('refshStatus', {
    state: () => {
        return {
            flag: ref(true),
        }
    },
})


export default refshStatus
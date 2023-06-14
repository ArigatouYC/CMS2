import { defineStore } from 'pinia'
import { ref } from 'vue'

const refshStatus = defineStore('refshStatus', {
  state: () => {
    return {
      flag: ref(true)
    }
  }
})

export default refshStatus

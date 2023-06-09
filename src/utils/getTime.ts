import { ref } from 'vue';
let nowTime = ref(0)
let sayHello = ref('')

export let getTime = () => {
    nowTime.value = new Date().getHours();
    if (nowTime.value <= 9) {
        sayHello.value = '早上好'
    } else if (nowTime.value <= 12) {
        sayHello.value = '中午好'
    } else if (nowTime.value <= 18) {
        sayHello.value = '下午好'
    } else {
        sayHello.value = '晚上好'
    }
    return sayHello.value

}
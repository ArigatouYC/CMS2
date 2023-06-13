<template>
    <div class="box">
        <div class="sentence">
            <div>
                <p>每日一句鸡汤：</p>
                <p>{{ sentence }}</p>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
// import { getSentence } from '@/apis/users/index'
// import { computed } from "vue";
import axios from "axios";
let sentence = ref('')
let sentenceURL = 'https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json'

onMounted(() => {

    axios.get(sentenceURL).then((res) => {
        sentence.value = res.data.anwei
    })
})

//脱掉外层HTML标签
// let plainTxt = computed(() => {
//     return sentence.value.replace(/<[^>]+>/g, '');
// })
</script>

<style scoped lang="scss">
.box {
    display: flex;
    justify-content: center;
}

.sentence {
    width: 60vw;
    margin-top: 100px;
    font-size: 40px;
}
</style>
<template>
    <div class="sentence">
        <div>
            <p>每日一言：</p>
            <p>{{ plainTxt }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import { getSentence } from '@/apis/users/index'
import { computed } from "vue";
let sentence = ref('')

// onMounted(async () => {
//     sentence.value = await getSentence()
// })

//脱掉外层HTML标签
let plainTxt = computed(() => {
    return sentence.value.replace(/<[^>]+>/g, '');
})
</script>

<style scoped lang="scss">
.sentence {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    font-size: 50px;
}
</style>
<template>
  <div class="out">
    <el-card class="box-card">
      <div class="cardContent">
        <div class="left">
          <el-avatar :size="120" :src="storeData.avatar" />
        </div>
        <div class="right">
          <h2 class="hi">{{ nowTime }},{{ storeData.username }}</h2>
          <br />
          <h2 class="cc">欢迎使用CC运营平台</h2>
        </div>
      </div>
    </el-card>

    <div class="box">
      <div class="sentence">
        <div>
          <p>每日一句鸡汤：</p>
          <p>{{ sentence }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import storeData_ from '@/stores/modules/user'
import { getTime } from '@/utils/getTime'
import { onMounted } from 'vue'
import { ref } from 'vue'
// import { getSentence } from '@/apis/users/index'
// import { computed } from "vue";
import axios from 'axios'
let sentence = ref('')
let sentenceURL = 'https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json'
let nowTime = getTime()
let storeData = storeData_()

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
.out {
  padding: 20px;
}

.box {
  display: flex;
  justify-content: center;
}

.box-card {
  border-radius: 10px;
}

.cardContent {
  height: 16vh;
  display: flex;
  align-items: center;
}

.right {
  margin-left: 20px;

  .cc {
    font-size: 20px;
    font-weight: normal;
    font-style: italic;
  }
}

.hi {
  font-weight: normal;
  font-size: 25px;
}

.sentence {
  width: 60vw;
  margin-top: 100px;
  font-size: 40px;
}
</style>

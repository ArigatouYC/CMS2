<script setup lang="ts">
import { RouterView } from 'vue-router'
import request from './utils/request';

request({
  method: "GET",
  url: "https://v.api.aa1.cn/api/qqnicheng/index.php?qq=2208745934"
}).then((res) => {
  console.log(res);
}).catch((reason) => {
  console.log(reason);

})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

<script setup lang="ts">
import { RouterView } from 'vue-router'

let msg = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
</script>

<template>
  <el-button type="primary" @click="msg">Primary</el-button>
  <RouterView />
</template>

<style scoped></style>

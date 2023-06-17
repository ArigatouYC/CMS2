<template>
  <div class="box">
    <div class="boxTop">
      <Chart1 />
      <Chart2 />
    </div>

    <div class="boxBottom">
      <Chart3 />
      <Chart4 />
    </div>
  </div>
</template>

<script setup lang="ts">
import Chart1 from '@/views/dataScreen/chart1/index.vue'
import Chart2 from '@/views/dataScreen/chart2/index.vue'
import Chart3 from '@/views/dataScreen/chart3/index.vue'
import Chart4 from '@/views/dataScreen/chart4/index.vue'
</script>

<style scoped lang="scss">
.box {
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

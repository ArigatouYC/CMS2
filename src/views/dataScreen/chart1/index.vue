<template>
    <div class="charts1" ref="charts1"></div>
</template>
  
<script setup lang="ts">

import * as echarts from 'echarts/core';

import { CanvasRenderer } from 'echarts/renderers';
import { ref, onMounted } from 'vue'

import {
    BarChart,
    LineChart
} from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    // 数据集组件
    DatasetComponent,
    // 内置数据转换器组件 (filter, sort)
    TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);

// 基于准备好的dom，初始化echarts实例
let charts1 = ref()

onMounted(() => {
    let myChart = echarts.init(charts1.value)
    // 绘制图表
    myChart.setOption({
        title: {
            text: '订单数量'
        },
        tooltip: {},
        xAxis: {
            data: ['一月', '二月', '三月', '四月', '五月', '六月']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [1028, 2240, 1360, 798, 1499, 820]
            }
        ]
    })
})


</script>
  
<style scoped lang="scss">
.charts1 {
    width: 44vw;
    height: 40vh;
    // background-color: pink;
}
</style>
<template>
    <div class="charts3" ref="charts3"></div>
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
let charts3 = ref()


onMounted(() => {
    let myChart = echarts.init(charts3.value)
    // 绘制图表
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    })
})


</script>
  
<style scoped lang="scss">
.charts3 {
    width: 44vw;
    height: 40vh;
}
</style>
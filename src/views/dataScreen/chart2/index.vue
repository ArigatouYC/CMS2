<template>
    <div class="charts2" ref="charts2"></div>
</template>
  
<script setup lang="ts">

import * as echarts from 'echarts/core';

import { CanvasRenderer } from 'echarts/renderers';
import { ref, onMounted, watch } from 'vue'
import darkStatus_ from '@/stores/modules/darkStatus';

import {
    BarChart,
    LineChart,
    PieChart
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
    CanvasRenderer,
    PieChart
]);


let dark = darkStatus_()
let charts2 = ref()

watch(dark, () => {
    setChart()
})



let setChart = function () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(charts2.value)
    // 绘制图表
    myChart.setOption({
        backgroundColor: dark.isdark ? '#121212' : '#fff',
        title: {
            text: '访客来源'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data: [
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ]
            }
        ]
    })

}

onMounted(() => {
    setChart()
})


</script>
  
<style scoped lang="scss">
.charts2 {
    width: 44vw;
    height: 40vh;
    // background-color: cyan;
    margin-top: 15px;
}
</style>
<template>
    <div class="charts4" ref="charts4"></div>
</template>
  
<script setup lang="ts">

import * as echarts from 'echarts/core';

import { CanvasRenderer } from 'echarts/renderers';
import { ref, onMounted, watch } from 'vue'

import {
    BarChart,
    LineChart,
    PieChart,
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
import 'echarts-wordcloud'


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
    PieChart,

]);

let charts4 = ref()

let datas = [{
    name: "iPhone14",
    value: 30
},
{
    name: "蓝牙耳机",
    value: 28
},
{
    name: "小米13",
    value: 24
},
{
    name: "手机",
    value: 23
},
{
    name: "贴膜",
    value: 22
},
{
    name: "工装",
    value: 21
},
{
    name: "NIKE",
    value: 20
},
{
    name: "AJ1",
    value: 29
},
{
    name: "小主机",
    value: 28
},
{
    name: "塞尔达王国之泪",
    value: 27
},
{
    name: "4k显示器",
    value: 26
},
{
    name: "魅族20无界",
    value: 25
},
{
    name: "JK",
    value: 24
},
{
    name: "外买券",
    value: 30
},
{
    name: "游戏本",
    value: 18
},
{
    name: "华为",
    value: 14
},
{
    name: "4060Ti",
    value: 13
},
{
    name: "洗面奶",
    value: 12
},
{
    name: "飞天茅台",
    value: 11
},
{
    name: "华硕",
    value: 10
},
{
    name: "大雪",
    value: 9
},
{
    name: "染发剂",
    value: 8
},
{
    name: "小米",
    value: 7
},
{
    name: "扫地机器人",
    value: 6
},
{
    name: "吹风机",
    value: 5
},
{
    name: "音箱",
    value: 4
},
{
    name: "百褶裙",
    value: 3
}
];






onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(charts4.value)
    // 绘制图表
    myChart.setOption({
        title: {
            text: '站内热搜关键词'
        },
        tooltip: {
            show: true,
            position: 'top',
            textStyle: {
                fontSize: 20
            }
        },
        series: [{
            type: "wordCloud",
            // 网格大小，各项之间间距
            gridSize: 60,
            // 形状 circle 圆，cardioid  心， diamond 菱形，
            // triangle-forward 、triangle 三角，star五角星
            shape: 'circle',
            // 字体大小范围
            sizeRange: [12, 45],
            // 文字旋转角度范围
            rotationRange: [0, 0],
            // 旋转步值
            // rotationStep: 90,
            // 自定义图形
            // maskImage: maskImage,
            left: 'center',
            top: 'center',
            right: null,
            bottom: null,
            // 画布宽
            width: '90%',
            // 画布高
            height: '80%',
            // 是否渲染超出画布的文字
            drawOutOfBound: false,
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 200 + 55),
                            Math.round(Math.random() * 200 + 55),
                            Math.round(Math.random() * 200 + 55)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#2ac'
                }
            },
            data: datas
        }]
    })

})


</script>
  
<style scoped lang="scss">
.charts4 {
    width: 44vw;
    height: 40vh;
    // background-color: cyan;
    margin-top: 15px;
}
</style>
<template>
  <div class="charts3" ref="charts3"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core'

import { CanvasRenderer } from 'echarts/renderers'
import { ref, onMounted } from 'vue'

import chinaMap from './chianMap.json'

import { BarChart, LineChart, MapChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  //地图相关
  VisualMapComponent
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'

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
  MapChart,
  VisualMapComponent
])

// 基于准备好的dom，初始化echarts实例
let charts3 = ref()
echarts.registerMap('china', chinaMap as any)

onMounted(() => {
  let myChart = echarts.init(charts3.value)
  // 绘制图表
  let option = {
    // backgroundColor: '#121212',
    title: { text: '订单分布情况' },
    series: [
      {
        type: 'map',
        map: 'china',
        zoom: 1.5,
        roam: true,
        top: 100,
        data: [
          { name: '云南省', value: 470 },
          { name: '广东省', value: 797 },
          { name: '福建省', value: 563 },
          { name: '湖南省', value: 502 },
          { name: '四川省', value: 603 },
          { name: '广西省', value: 401 },
          { name: '青海省', value: 566 },
          { name: '安徽省', value: 587 },
          { name: '山东省', value: 680 },
          { name: '浙江省', value: 870 },
          { name: '江苏省', value: 920 },
          { name: '湖北省', value: 782 },
          { name: '河北省', value: 701 },
          { name: '山西省', value: 502 },
          { name: '辽宁省', value: 692 },
          { name: '甘肃省', value: 582 },
          { name: '河南省', value: 655 },
          { name: '陕西省', value: 577 },
          { name: '吉林省', value: 588 },
          { name: '贵州省', value: 392 },
          { name: '江西省', value: 610 },
          { name: '海南省', value: 312 },
          { name: '台湾省', value: 103 },
          { name: '黑龙江省', value: 602 },
          { name: '重庆市', value: 701 },
          { name: '北京市', value: 592 },
          { name: '天津市', value: 672 },
          { name: '上海市', value: 981 },
          { name: '西藏自治区', value: 31 },
          { name: '新疆维吾尔自治区', value: 26 },
          { name: '内蒙古自治区', value: 169 },
          { name: '宁夏回族自治区', value: 491 },
          { name: '广西壮族自治区', value: 502 }
        ],
        emphasis: {
          itemStyle: {
            areaColor: '#ccc'
          }
        }
      }
    ],
    visualMap: {
      min: 1,
      max: 1000,
      right: 100,
      text: ['hot', 'low'],
      bottom: 50,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered']
      }
    }
  }
  myChart.setOption(option)
})
</script>

<style scoped lang="scss">
.charts3 {
  width: 44vw;
  height: 40vh;
}
</style>

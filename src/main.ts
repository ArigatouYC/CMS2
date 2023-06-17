// import './assets/main.css'
import '@/styles/index.scss'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import pinia from './stores'

import '@/permission'

import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'

import darkStatus_ from '@/stores/modules/darkStatus'

//echarts
//...

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(pinia)

app.mount('#app')

const storeDark = darkStatus_()
const isdark = localStorage.getItem('darkStatus')
const html = document.documentElement

// Boolean(isdark)会把"false"字符串转换成false值？？？？！！！！！
// console.log(Boolean(isdark));

if (isdark == 'true') {
  storeDark.isdark = true
  html.className = 'dark'
} else {
  storeDark.isdark = false
  html.className = ''
}

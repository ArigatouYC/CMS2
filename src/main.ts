// import './assets/main.css'
import '@/styles/index.scss'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import pinia from './stores'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(pinia)

app.mount('#app')


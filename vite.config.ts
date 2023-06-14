// old:
import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command ,mode}) => {
  const env = loadEnv(mode,process.cwd())
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        eslintrc: { enabled: true }
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
        viteMockServe({
        // 此处配置只支持vite-plugin-mock@2 ，3.0不支持！！！！！2.0会404，2.9.8暂时没发现问题
        localEnabled: command === 'serve',
      }),
    ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy : {
      [env.VITE_APP_BASE_API]:{
        target:env.VITE_SERVE,
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }

}
})




//new:
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// import path from "path"

// import { viteMockServe } from 'vite-plugin-mock'

// // https://vitejs.dev/config/
// export default defineConfig(({ command }) => {
//   return {
//     plugins: [
//       vue(),
      
//       viteMockServe({
//         // 此处配置只支持vite-plugin-mock@2 ，3.0不支持！！！！！2.0会404，2.9.8暂时没发现问题
//         localEnabled: command === 'serve',
//       }),
//     ],
//     resolve: {
//       alias: {
//         "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
//       }
//     },

//     // 颜色变量scss
//     css: {
//       preprocessorOptions: {
//         scss: {
//           javascriptEnabled: true,
//           additionalData: '@import "./src/styles/variable.scss";',
//         },
//       },
//     },

//   }
// })


<template>
  <div class="box" :class="dark.isdark ? 'boxDark' : ''">
    <div class="boxleft">
      <el-icon size="25" @click="switchCollapse">
        <Fold v-show="isCollapse" />
        <Expand v-show="!isCollapse" />
      </el-icon>
    </div>
    <div class="boxright">
      <div class="rightbutton">
        <el-button icon="RefreshRight" circle @click="refsh" />
        <!-- <el-button icon="RefreshRight" circle /> -->
        <el-button icon="FullScreen" circle @click="FullScreen" />

        <el-popover placement="bottom" :width="300" trigger="click">
          <div class="titleText">主题设置：</div>

          <span class="text">颜色风格:</span>
          <el-color-picker
            v-model="color"
            show-alpha
            :predefine="predefineColors"
            @change="colorChanged"
          />

          <div class="darkSwitch">
            <span class="text">深色模式:</span>
            <el-switch
              v-model="dark.isdark"
              inline-prompt
              active-icon="MoonNight"
              inactive-icon="Sunny"
              size="large"
              @change="darkChanged"
            />
          </div>

          <template #reference>
            <el-button icon="Setting" circle />
          </template>
        </el-popover>
      </div>

      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="32" :src="userStore.avatar" />
          <h2 class="username">{{ userStore.username }}</h2>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// let isCollapse = ref(false)
import { isCollapse } from '@/components/commond/isCollapse'
import refshStatus_ from '@/stores/modules/refshStatus'
import userStore_ from '@/stores/modules/user'
// import { computed } from 'vue';

import { useRouter } from 'vue-router'

import darkStatus_ from '@/stores/modules/darkStatus'

let $router = useRouter()

let userStore = userStore_()

let switchCollapse = () => {
  isCollapse.value = !isCollapse.value
}

let refshStatus = refshStatus_()

let refsh = () => {
  refshStatus.flag = false
  // 方法1
  setTimeout(() => {
    refshStatus.flag = true
  }, 400)
  // 方法2 nextTick
}

let FullScreen = () => {
  let FullScreenStatus = document.fullscreenElement
  if (!FullScreenStatus) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

// let loginStatus = computed(() => {
//     if (userStore.isLogin) {
//         return true
//     } else {
//         return false
//     }
// })

let loginOut = async () => {
  await userStore.userLoginOut()
  //不要在ts文件中跳转路由
  $router.push({ path: '/login' })
}

const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
])

let dark = darkStatus_()
let html = document.documentElement
let darkChanged = () => {
  // dark.isdark ? html.className = '' : html.className = 'dark'
  if (dark.isdark) {
    html.className = 'dark'
  } else {
    html.className = ''
  }
  localStorage.setItem('darkStatus', dark.isdark.toString())
}

let colorChanged = () => {
  html.style.setProperty('--el-color-primary', color.value)
}
</script>

<style scoped lang="scss">
.box {
  height: 50px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: #d5d5d5 solid 1px;
  // background-color: #cfd3dc;
}

.boxDark {
  border-bottom: #2c2c2c solid 1px;
}

.boxleft {
  display: flex;
  align-items: center;
}

.el-dropdown-link {
  display: flex;
  // justify-content: center;
  align-items: center;

  //消除鼠标悬停黑边框
  outline: none;
}

.el-breadcrumb {
  margin-left: 30px;
}

h1 {
  color: #181818;
}

// .box {
//   background-color: #181818;
// }

.boxright {
  display: flex;
  align-items: center;

  .rightbutton {
    margin-right: 30px;

    .el-button {
      margin: 0 10px;
      border: 1px solid #c2bdbd;
    }
  }
}

.el-icon {
  cursor: pointer;
}

.username {
  margin: 0 10px;
  font-weight: normal;
  font-size: 16px;
}

.darkSwitch {
  margin-top: 10px;
}

.titleText {
  font-size: 20px;
  margin-bottom: 20px;
}

.text {
  font-size: 20px;
  margin-right: 20px;
}

.el-switch.is-checked {
  --el-switch-on-color: #2c2c2c;
  /* 这里是你想要的背景色 */
}
</style>

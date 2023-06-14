<template>
  <div class="box">
    <div class="boxleft">
      <el-icon size="25" @click="switchCollapse">
        <Fold v-show="isCollapse" />
        <Expand v-show="!isCollapse" />
      </el-icon>

      <!-- <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item>{{ $router.currentRoute.value.matched[0].name }}</el-breadcrumb-item>
                <el-breadcrumb-item>{{ $router.currentRoute.value.matched[1].name }}</el-breadcrumb-item>
            </el-breadcrumb> -->
    </div>
    <div class="boxright">
      <div class="rightbutton">
        <el-button icon="RefreshRight" circle @click="refsh" />
        <el-button icon="FullScreen" circle @click="FullScreen" />


        <el-popover placement="bottom" :width="300" trigger="click">

          <div class="titleText">主题设置：</div>

          <span class="text">颜色风格:</span>
          <el-color-picker v-model="color" show-alpha :predefine="predefineColors" />

          <div class="darkSwitch">
            <span class="text">深色模式:</span>
            <el-switch v-model="dark" inline-prompt active-icon="Moon" inactive-icon="Sunny" size="large"
              @change="darkChanged" />
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
          <el-icon class="el-icon--right" color="#000">
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
import { ref } from "vue";
// let isCollapse = ref(false)
import { isCollapse } from '@/components/commond/isCollapse'
import refshStatus_ from '@/stores/modules/refshStatus'
import userStore_ from '@/stores/modules/user'
// import { computed } from 'vue';

import { useRouter } from 'vue-router'

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
  '#c7158577',
])

const dark = ref(false)

let darkChanged = () => {
  console.log(dark.value);

}
</script>

<style scoped lang="scss">
.box {
  height: 50px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #cfd3dc;
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

.boxright {
  display: flex;

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

<template>
  <div class="outBox">
    <div class="loginBox">
      <el-form :model="userInfo" :rules="rules">
        <h1>登录</h1>

        <el-form-item prop="username">
          <p>账号:</p>
          <el-input v-model="userInfo.username" clearable placeholder="输入账号" />
        </el-form-item>

        <el-form-item prop="password">
          <p>密码:</p>
          <el-input
            v-model="userInfo.password"
            type="password"
            show-password
            placeholder="输入密码"
          />
        </el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="loading">登录</el-button>
      </el-form>
      <div class="test">
        <h1 class="test">
          测试账号：admin <br />
          密码：atguigu123
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
//??
import userStore_ from '@/stores/modules/user'

import { getTime } from '@/utils/getTime'
import { FormRules } from 'element-plus'

// 配置了自动导入后不要再重复导入ElNotification，不然不生效！！！！！！！！！！
// import { ElNotification } from 'element-plus';

let userStore = userStore_()
let userInfo = reactive({
  username: '',
  password: ''
})

// 对form表单输入的数据进行校验：https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C

let rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ]
})

let $router = useRouter()
let loading = ref(false)

let onSubmit = async () => {
  loading.value = true
  await userStore.userLogin(userInfo).then(
    (res) => {
      $router.push('/')
      ElNotification({
        type: 'success',
        title: '登录成功',
        message: getTime(),
        duration: 1000
      })
      loading.value = false
    },
    (err) => {
      console.log(err)
      ElNotification({
        type: 'error',
        title: '账号或密码不正确',
        message: '请重试',
        duration: 1000
      })
      loading.value = false
    }
  )
}
</script>

<style scoped lang="scss">
.outBox {
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #cfd3dc;
  background: url('@/assets/imgs/bg.jpg');
}

.loginBox {
  margin: 0 auto;
  border-radius: 20px;
  width: 380px;
  padding: 30px;
  background-color: #fff;
  opacity: 0.95;

  h1 {
    font-size: 25px;
    text-align: center;
    font-weight: normal;
  }
}

.el-button {
  width: 100%;
  margin-top: 30px;
}

.test {
  margin-top: 20px;
  color: #888;
}

input {
  background-color: #fff;
}
</style>

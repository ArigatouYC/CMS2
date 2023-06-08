<template>
    <div class="outBox">
        <div class="loginBox">
            <el-form :model="userInfo" label-width="auto">

                <h1>登录</h1>

                <el-form-item>
                    <p>账号:</p>
                    <el-input v-model="userInfo.username" />
                </el-form-item>

                <el-form-item>
                    <p>密码:</p>
                    <el-input v-model="userInfo.password" type="password" />
                </el-form-item>

                <el-button type="primary" @click="onSubmit">登录</el-button>

            </el-form>
        </div>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

//??
import userStore_ from '@/stores/modules/user';
let userStore = userStore_()

let userInfo = reactive({
    username: '',
    password: '',
})


let onSubmit = () => {
    userStore.userLogin(userInfo)
    // ElMessage.success('success')
}
</script>

<style scoped lang="scss">
.outBox {
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: #CFD3DC;
}

.loginBox {
    margin: 0 auto;
    border-radius: 20px;
    width: 380px;
    padding: 30px;
    background-color: #fff;

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
</style>
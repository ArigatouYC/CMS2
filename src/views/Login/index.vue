<template>
    <div class="outBox">
        <div class="loginBox">
            <el-form :model="form" label-width="auto" :rules="rules">

                <h1>登录</h1>

                <el-form-item prop="account">
                    <p>账号:</p>
                    <el-input v-model="form.accound" />
                </el-form-item>

                <el-form-item prop="password">
                    <p>密码:</p>
                    <el-input v-model="form.password" type="password" />
                </el-form-item>

                <el-button type="primary" @click="onSubmit">登录</el-button>

            </el-form>
        </div>

    </div>
</template>

<script setup lang="ts">
import { FormRules } from 'element-plus';
import { reactive } from 'vue';
import { ref } from 'vue'
let form = ref({
    accound: '',
    password: '',
})

let rules = reactive<FormRules>({
    account: [
        { required: true, message: "账号不能为空", trigger: "blur" },
    ],
    password: [
        { required: true, message: "密码不能为空", trigger: "blur" },
    ],
})

let onSubmit = () => {
    ElMessage.success('success')
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
        text-align: center;
        font-weight: normal;
    }

}

.el-button {
    width: 100%;
    margin-top: 30px;
}
</style>
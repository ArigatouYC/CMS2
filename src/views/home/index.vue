<template>
    <div class="common-layout">
        <el-container>

            <Aside></Aside>

            <el-container class="c">
                <Header></Header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import Aside from '@/components/Aside/index.vue'
import Header from '@/components/Header/index.vue'
</script>

<style scoped>
.c {
    flex-direction: column;
}
</style>
<template>
    <div class="common-layout">
        <el-container>
            <Aside></Aside>
            <el-container class="c">
                <Header></Header>
                <div v-if="storesData.flag">
                    <router-view v-slot="{ Component }">
                        <transition name="fade">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </div>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import Aside from '@/components/Aside/index.vue'
import Header from '@/components/Header/index.vue'

import refshStatus from '@/stores/modules/refshStatus'
import userStore_ from '@/stores/modules/user';
import { onMounted } from 'vue';

let storesData = refshStatus()
let userStore = userStore_()

onMounted(() => {
    userStore.getUserInfo()
})

</script>

<style scoped>
.c {
    flex-direction: column;
}
</style>
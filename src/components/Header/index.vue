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
                <el-button icon="Setting" circle />
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
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item>Action 4</el-dropdown-item>
                        <el-dropdown-item>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
// let isCollapse = ref(false)
import { isCollapse } from '@/components/commond/isCollapse'
import refshStatus from '@/stores/modules/refshStatus'
import userStore_ from '@/stores/modules/user'

let userStore = userStore_()

let switchCollapse = () => {
    isCollapse.value = !isCollapse.value
}

let storesData = refshStatus()

let refsh = () => {
    storesData.flag = false
    // 方法1
    setTimeout(() => {
        storesData.flag = true
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

</script>

<style scoped lang="scss">
.box {
    height: 50px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #CFD3DC;
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
</style>
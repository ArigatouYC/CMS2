<template>
    <div class="box">
        <div class="boxleft">
            <el-icon size="25" @click="switchCollapse">
                <Fold v-show="isCollapse" />
                <Expand v-show="!isCollapse" />
            </el-icon>

            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">
                    <h1>Homepage</h1>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="boxright">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                    <el-icon class="el-icon--right" color="#FFF">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>gsd
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

let switchCollapse = () => {
    isCollapse.value = !isCollapse.value
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
}

.el-breadcrumb {
    margin-left: 30px;
}

h1 {
    color: #181818;
}

.el-icon {
    cursor: pointer;
}
</style>
<template>
    <el-aside :class="isCollapse ? 'menu-collapse' : ''">
        <!-- 下拉菜单 -->
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse='isCollapse' :collapse-transition="false">

            <el-menu-item>
                <img v-show="!isCollapse" src="@/assets/imgs/ynufe.png" alt="">
                <h1 v-show="isCollapse">CC</h1>
            </el-menu-item>


            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>权限管理</span>
                </template>
                <el-menu-item index="1-1"><el-icon>
                        <UserFilled />
                    </el-icon><span>角色列表</span></el-menu-item>
                <el-menu-item index="1-2"><el-icon>
                        <List />
                    </el-icon><span>角色列表</span></el-menu-item>
                <el-menu-item index="1-3"><el-icon>
                        <Folder />
                    </el-icon><span>角色列表</span></el-menu-item>
            </el-sub-menu>
        </el-menu>

        <!-- 普通菜单 -->
        <el-menu :collapse-transition="false">
            <el-menu-item>
                <el-icon>
                    <Grid />
                </el-icon>
                <span>课程管理</span>
            </el-menu-item>
        </el-menu>

        <el-menu>
            <el-menu-item>
                <el-icon>
                    <Avatar />
                </el-icon>
                <span>用户管理</span>
            </el-menu-item>

            <!-- 下拉菜单 -->
            <el-menu default-active="2" class="el-menu-vertical-demo" :collapse='isCollapse' :collapse-transition="false">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>广告管理</span>
                    </template>
                    <el-menu-item index="1-1"><el-icon>
                            <UserFilled />
                        </el-icon><span>角色列表</span></el-menu-item>
                    <el-menu-item index="1-2"><el-icon>
                            <List />
                        </el-icon><span>角色列表</span></el-menu-item>
                    <el-menu-item index="1-3"><el-icon>
                            <Folder />
                        </el-icon><span>角色列表</span></el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-menu>
        <el-button type="primary" @click="switchCollapse"></el-button>
    </el-aside>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
import { isCollapse } from '@/components/commond/isCollapse'
// let isCollapse = ref(false)

let switchCollapse = () => {
    isCollapse.value = !isCollapse.value
}
</script>

<style scoped lang="scss">
.el-aside {
    background-color: #1919;
    width: 200px;
    height: 100vh;
}

.el-menu {
    background-color: #888;
    width: 100%;
    border-right: 0;
}

.menu-collapse {
    width: 60px;

    span {
        display: none;
    }
}
</style>
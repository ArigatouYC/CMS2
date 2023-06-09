<template>
    <el-aside :class="isCollapse ? 'menu-collapse' : ''">

        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse='isCollapse' :collapse-transition="false">

            <el-menu-item>
                <img v-show="!isCollapse" src="@/assets/imgs/ynufe.png" alt="">
                <h1 v-show="isCollapse">CC</h1>
            </el-menu-item>

            <el-menu-item>
                <el-icon>
                    <House />
                </el-icon>
                <span>首页</span>
            </el-menu-item>

            <!-- 下拉菜单 -->
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <Lock />
                    </el-icon>
                    <span>权限管理</span>
                </template>
                <el-menu-item index="1-1">
                    <el-icon>
                        <UserFilled />
                    </el-icon><span>用户管理</span></el-menu-item>
                <el-menu-item index="1-2"><el-icon>
                        <List />
                    </el-icon><span>角色管理</span></el-menu-item>
                <el-menu-item index="1-3"><el-icon>
                        <Folder />
                    </el-icon><span>菜单管理</span></el-menu-item>
            </el-sub-menu>
        </el-menu>


        <!-- 下拉菜单 -->
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse='isCollapse' :collapse-transition="false">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <Orange />
                    </el-icon>
                    <span>商品管理</span>
                </template>
                <el-menu-item index="1-1"><el-icon>
                        <UserFilled />
                    </el-icon><span>商品管理1</span></el-menu-item>
                <el-menu-item index="1-2"><el-icon>
                        <List />
                    </el-icon><span>商品管理2</span></el-menu-item>
                <el-menu-item index="1-3"><el-icon>
                        <Folder />
                    </el-icon><span>商品管理3</span></el-menu-item>
            </el-sub-menu>
        </el-menu>

        <!-- 普通菜单 -->
        <el-menu>
            <el-menu-item>
                <el-icon>
                    <Avatar />
                </el-icon>
                <span>用户管理</span>
            </el-menu-item>

            <el-menu :collapse-transition="false">
                <el-menu-item>
                    <el-icon>
                        <Monitor />
                    </el-icon>
                    <span>数据大屏</span>
                </el-menu-item>
            </el-menu>
        </el-menu>
    </el-aside>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
import { isCollapse } from '@/components/commond/isCollapse'
// let isCollapse = ref(false)
</script>

<style scoped lang="scss">
.el-aside {
    background-color: #CFD3DC;
    border-right: 1px #FFF solid;
    width: 200px;
    height: 100vh;
}

.el-menu {
    background-color: #CFD3DC;
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
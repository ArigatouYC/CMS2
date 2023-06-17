<template>
  <div :class="dark.isdark ? 'dark' : 'noDark'">
    <el-aside :class="isCollapse ? 'menu-collapse' : ''">
      <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" :collapse-transition="false">
        <el-menu-item>
          <!-- <img v-show="!isCollapse" src="@/assets/imgs/ynufe.png" alt="" /> -->
          <h1 v-show="!isCollapse" class="logo">CC运营平台管理</h1>
          <h1 v-show="isCollapse">CC</h1>
        </el-menu-item>

        <el-menu-item @click="goHome">
          <el-icon>
            <House />
          </el-icon>
          <span>首页</span>
        </el-menu-item>

        <!-- 下拉菜单 -->
        <!-- 跳转点击事件不要给el-sub-menu，否则展开列表也会跳转到一个路径 -->
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Lock />
            </el-icon>
            <span>权限管理</span>
          </template>
          <el-menu-item index="1-1" @click="goUserManage">
            <el-icon>
              <UserFilled />
            </el-icon><span>用户管理</span></el-menu-item>

          <el-menu-item index="1-2" @click="goRoleManage"><el-icon>
              <List />
            </el-icon><span>角色管理</span></el-menu-item>
        </el-sub-menu>
      </el-menu>

      <!-- 下拉菜单 -->
      <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" :collapse-transition="false">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Orange />
            </el-icon>
            <span>商品管理</span>
          </template>

          <el-menu-item index="1-1" @click="goBrandsManage"><el-icon>
              <UserFilled />
            </el-icon><span>品牌管理</span>
          </el-menu-item>

          <el-menu-item index="1-2" @click="goAttributesManage"><el-icon>
              <List />
            </el-icon><span>属性管理</span>
          </el-menu-item>

          <el-menu-item index="1-3" @click="goSKUManage"><el-icon>
              <Shop />
            </el-icon><span>库存管理</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>

      <!-- 普通菜单 -->
      <!-- <el-menu-item>
                <el-icon>
                    <Avatar />
                </el-icon>
                <span>用户管理</span>
            </el-menu-item> -->

      <div @click="goDataScreen">
        <el-menu :collapse-transition="false">
          <el-menu-item>
            <el-icon>
              <Monitor />
            </el-icon>
            <span>数据统计</span>
          </el-menu-item>
        </el-menu>
      </div>


    </el-aside>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
import { isCollapse } from '@/components/commond/isCollapse'
// let isCollapse = ref(false)

import { useRouter } from 'vue-router'

import darkStatus_ from '@/stores/modules/darkStatus'
let $router = useRouter()

let goHome = () => {
  $router.push('/')
}
let goUserManage = () => {
  $router.push('/usermanagement')
}
let goRoleManage = () => {
  $router.push('/rolemanagement')
}
let goBrandsManage = () => {
  $router.push('/brandmanagement')
}
let goAttributesManage = () => {
  $router.push('/attributesmanagement')
}
let goSKUManage = () => {
  $router.push('/skumanagement')
}
let goDataScreen = () => {
  $router.push('/datascreen')
}

let dark = darkStatus_()
</script>

<style scoped lang="scss">
.el-aside {
  width: 200px;
  height: 100vh;
  transition: all 0.3s;
}

.noDark {
  border-right: 1px solid #d5d5d5;
}

.dark {
  border-right: 1px #2c2c2c solid;
}

.el-menu {
  // background-color: #cfd3dc;
  // width: 100%;
  border-right: 0;
}

.menu-collapse {
  width: 60px;

  span {
    display: none;
  }
}
</style>

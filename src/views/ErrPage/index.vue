<template>
    <div class="out">
        <div class="box">
            <el-icon size="55px">
                <Warning />
            </el-icon>
            <h1>&nbsp; 404 NOT FIND &nbsp;</h1>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.out {
    height: 100vh;
    padding-top: 200px;
    background-color: #CFD3DC;
}

.box {
    display: flex;
    align-items: center;
    justify-content: center;


    h1 {
        font-size: 50px;
    }
}
</style>
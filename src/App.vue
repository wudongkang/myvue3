<script setup lang="ts">

</script>

<template>
  <img alt="Vue logo" style="display:block;text-align:center;margin:0 auto" src="./assets/logo.png" />
  <router-link to="/home">
    <el-button > 跳转到home </el-button>
  </router-link>
  <router-link to="/">
    <el-button>
      跳转到shouye
    </el-button>
  </router-link>
   <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

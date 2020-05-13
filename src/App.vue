<template>
  <div id="app">
    <router-link to="/home" tag="el-button" active-class="el-button--primary">
      主页
    </router-link>
    <router-link to="/movies" tag="el-button" active-class="el-button--primary">
      电影
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

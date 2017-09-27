<template>
  <div id="app">
    <app-header/>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/header/header.vue'
export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

body{
  margin: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

*{
  box-sizing: border-box;
}
</style>

<style scoped>
  .main{
    margin-top: 60px;
  }
</style>

<template>
  <header>
    <div class="wrapper">
      <router-link to="/">Home</router-link>
      <router-link to="/create-feed">Create Feed</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'app-header'
  }
</script>

<style scoped>
  header{
    background: #2E112D;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: .5rem;
    height: 60px;
  }

  header a{
    color: #F0433A;
    text-decoration: none;
    font-weight: 900;
  }

  .wrapper{
    display: grid;
    width: 100%;
    height: 100%;
    grid: 1fr / auto-flow;
    justify-items: center;
    align-items: center;
  }

  .wrapper a{

  }
</style>

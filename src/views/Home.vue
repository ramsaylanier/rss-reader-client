<template>
  <div :class="$style.wrapper">
    <feed-list/>
  </div>
</template>

<script>
  import FeedList from '@/components/feed/list/container.vue'

  export default {
    name: 'home',
    components: {
      FeedList
    }
  }
</script>

<style module>
  .wrapper{
    max-width: 800px;
    margin: 0 auto;
    padding-top: 2rem;
  }
</style>

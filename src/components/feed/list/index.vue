<template>
  <div>
    <router-link v-for="feed in feeds" :to="`/feed/` + feed.id" :class="$style.item">
      <h3 :class="$style.description">{{feed.description}}</h3>
      <div :class="$style.body">
        {{feed.url}}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'feed-list'
}
</script>

<style lang="scss" module>
  .item{
    background-color: #eee;
    text-decoration: none;
    display: block;

    &:not(last-of-type){
      margin-bottom: 2rem;
    }
  }

  .description{
    padding: .5rem 2rem;
    margin: 0;
    background-color: #F0433A;
    color: white;
    font-size: 1.5rem;
    font-weight: 100;
  }

  .body{
    padding: .5rem 2rem;
  }
</style>

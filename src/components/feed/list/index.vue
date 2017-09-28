<template>
  <div>
    <div v-for="feed in feeds" :class="$style.item">
      <h3 :class="$style.description">
        <router-link :to="`/feed/` + feed.id">{{feed.description}}
        </router-link>
      </h3>
      <div :class="$style.body">
        <a :href="feed.url" target="_blank">{{feed.url}}</a>
      </div>
    </div>
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

    a{
      text-decoration: none;
    }
  }

  .description{
    padding: .5rem 2rem;
    margin: 0;
    background-color: #F0433A;
    color: white;
    font-size: 1.5rem;
    font-weight: 100;

    a{
      color: white;
    }
  }

  .body{
    padding: .5rem 2rem;

    a{
      color: #2E112D;
    }
  }
</style>

<template>
  <div>
    <div v-for="feed in feeds" :class="$style.item">

      <div :class="$style.header">
        <div>
          <h3 :class="$style.description">
            <router-link :to="`/feed/` + feed.id">{{feed.title}}
            </router-link>
          </h3>
        </div>
        <button :class="$style.button" @click="deleteFeed(feed.id)">
          <delete-icon/>
        </button>
      </div>


      <div :class="$style.body">
        <div :class="$style.metaItem">
          <span :class="$style.icon">
            <description-icon/>
          </span>
          <p>{{feed.description}}</p>
        </div>
        <div :class="$style.metaItem">
          <span :class="$style.icon">
            <link-icon/>
          </span>
          <a :href="feed.url" target="_blank">{{feed.url}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteIcon from '@/components/icons/deleteIcon.vue'
import DescriptionIcon from '@/components/icons/descriptionIcon.vue'
import LinkIcon from '@/components/icons/linkIcon.vue'

export default {
  name: 'feed-list',
  components: {
    DeleteIcon, DescriptionIcon, LinkIcon
  }
}
</script>

<style lang="scss" module>

  .header{
    display: grid;
    grid-template-columns: 1fr 50px;
    background-color: #F0433A;
    padding: .5rem;
  }

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
    margin: 0;
    color: white;
    font-size: 1.5rem;
    font-weight: 100;

    a{
      color: white;
    }
  }

  .body{
    padding: .5rem;

    a{
      color: #2E112D;
    }
  }

  .button{
    height: 30px;
    width: 30px;
    border: 0;
    background-color: transparent;
    justify-self: right;

    svg{
      fill: white;
      height: 100%;
      width: 100%;
    }
  }

  .metaItem{
    display: grid;
    grid-template-columns: 40px 1fr;
    background-color: white;
    padding: .5rem;

    &:not(:last-of-type){
      margin-bottom: .5rem;
    }

    p{
      margin: 0;
    }
  }

  .icon{
    display: block;
    height: 20px;
    width: 20px;

    svg{
      height: 100%;
      width: 100%;
      fill: #F0433A;
    }
  }
</style>

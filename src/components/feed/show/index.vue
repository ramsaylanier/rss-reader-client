<template>
  <article>
    <header :class="$style.header">
      <h2 :class="$style.title">{{feed.title}}</h2>
      <h3 :class="$style.description">{{feed.description}}</h3>
      <div :class="$style.meta">
        <div :class="$style.metaItem">language: <b>{{feed.language}}</b></div>
        <div :class="$style.metaItem">last updated on: <b>{{formatDate(feed.updatedAt)}}</b></div>
      </div>
    </header>

    <section :class="$style.feedItems">
      <div :class="$style.feedItem" v-for="item in feed.items">
        <div :class="$style.itemHeader">
          <h3 :class="$style.itemTitle"><a :href="item.link" target="_blank">{{item.title}}</a></h3>
          <div :class="$style.itemSubjects">
            <ul :class="$style.subjectList">
              <li :class="$style.subjectItem" v-for="subject in item.subject">
                {{subject}}
              </li>
            </ul>
          </div>
        </div>


        <div :class="$style.itemBody">
          <div :class="$style.itemDescription" v-html="item.description"></div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'feed-show',
    data () {
      return {
        feed: [],
        skipPost: true
      }
    },
    methods: {
      handleClick (e) {
        this.skipPost = !this.skipPost
      },
      formatDate (date) {
        return moment(date).format('MMM DD, YYYY')
      }
    }
  }
</script>

<style lang="scss" module>

  .header{
    padding: 3rem;
    border-bottom: 3px solid #F0433A;
  }
  .title{
    font-size: 3rem;
    margin: 0;
  }

  .description{
    margin: 0;
  }

  .meta{
    padding: 1rem 0;
    display: flex;
  }

  .metaItem{
    padding: .5rem;
    font-size: .9rem;
    background-color: #F0433A;
    color: white;

    &:not(:first-of-type){
      margin-left: .5rem;
    }
  }

  .feedItems{
    padding: 3rem;
    background-color: #eee;
  }

  .feedItem{
    background-color: white;
    &:not(:last-of-type){
      margin-bottom: 1rem;
    }
  }

  .itemHeader{
    background-color: #F0433A;
    padding: 2rem 1rem;

    display: grid;
    grid-template-columns: 2fr .5fr auto;
    grid-template-areas: "title . subjects";
  }

  .itemBody{
    padding: 1rem;

    p{
      font-size: 1.1rem;
      color: #2E112D;
    }
  }

  .itemTitle{
    font-size: 1.5rem;
    font-weight: 100;
    margin: 0;

    grid-area: title;

    a{
      color: white;
      text-decoration: none;

      &:hover{
        color: #540032;
      }
    }
  }

  .itemSubjects{
    grid-area: subjects;
  }

  .subjectList{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .subjectItem{
    background-color: white;
    padding: .25rem .5rem;
    font-size: .8rem;

    &:not(:last-of-type){
      margin-bottom: .25rem;
    }
  }

  .itemDescription{
    p{
      display: flex;
      flex-flow: column;

      > * {
        margin-bottom: 1rem;
      }
    }
  }
</style>

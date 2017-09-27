<script>
  import gql from 'graphql-tag'
  import FeedShow from './index.vue'

  const FeedQuery = gql`
    query Feed($id: String!) {
      feed(id: $id) {
        id
        url
        description
        title
        language
        updatedAt
        items{
          title
          contributor
          publisher
          subject
          link
          description
        }
      }
    }
  `

  const PostQuery = gql`
    query Post($url: String){
      post(url: $url)
    }
  `

  export default {
    extends: FeedShow,
    apollo: {
      feed (id) {
        return {
          query: FeedQuery,
          variables: {
            id: this.$route.params.id
          }
        }
      },
      post () {
        return {
          query: PostQuery,
          variables () {
            return {
              url: this.feed.url
            }
          },
          skip () {
            return this.skipPost
          },
          loadingKey: 'loadingQueriesCount'
        }
      }
    }
  }
</script>

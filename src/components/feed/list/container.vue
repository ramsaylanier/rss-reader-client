<script>
  import gql from 'graphql-tag'
  import FeedList from './index.vue'

  export const FeedQuery = gql`
    query Feeds {
      feeds {
        id
        url
        description
        language
      }
    }
  `

  export default {
    extends: FeedList,
    apollo: {
      feeds () {
        return {
          query: FeedQuery
        }
      }
    }
  }
</script>

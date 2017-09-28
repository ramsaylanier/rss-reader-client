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
        title
      }
    }
  `

  export const DeleteFeedMutation = gql`
    mutation DeleteFeed($id: String!){
      deleteFeed(id: $id)
    }
  `

  export default {
    extends: FeedList,
    methods: {
      deleteFeed (id) {
        this.$apollo.mutate({
          mutation: DeleteFeedMutation,
          variables: {
            id: id
          },
          update: (store, { data: {deleteFeed} }) => {
            const data = store.readQuery({query: FeedQuery})
            data.feeds = data.feeds.filter(item => {
              return item.id !== deleteFeed
            })
            store.writeQuery({query: FeedQuery, data})
          }
        })
      }
    },
    apollo: {
      feeds () {
        return {
          query: FeedQuery
        }
      }
    }
  }
</script>

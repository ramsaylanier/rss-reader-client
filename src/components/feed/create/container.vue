<script>
  import gql from 'graphql-tag'
  import CreateFeed from './index.vue'

  export const CreateFeedMutation = gql`
    mutation CreateFeed($url: String!) {
      createFeed(url: $url){
        id
        url
      }
    }
  `

  const FeedQuery = gql`
    query Feeds {
      feeds {
        id
        url
      }
    }
  `

  export default {
    extends: CreateFeed,
    methods: {
      createFeed (url) {
        this.$apollo.mutate({
          mutation: CreateFeedMutation,
          variables: {
            url: url
          },
          update: (store, { data: {createFeed} }) => {
            const data = store.readQuery({query: FeedQuery})
            data.feeds.push(createFeed)
            store.writeQuery({query: FeedQuery, data})
          }
        }).then(r => {
          this.$router.push({
            name: 'FeedShow',
            params: {
              id: r.data.createFeed.id
            }
          })
  
          return r
        })
      }
    }
  }
</script>

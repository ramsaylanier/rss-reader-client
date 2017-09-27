<template>
  <div>
    <custom-form
    :inputs="inputs"
    @handleSubmit="handleSubmit"
    />
  </div>
</template>

<script>
import CustomForm from '@/components/form/form.vue'

const inputs = [
  {
    type: 'url',
    name: 'feed',
    value: '',
    placeholder: 'RSS Feed URL'
  }, {
    type: 'submit',
    value: 'Create'
  }
]

export default {
  name: 'create-feed',
  data () {
    return {
      inputs: inputs,
      feeds: []
    }
  },
  methods: {
    handleSubmit: function ({feed}) {
      this.createFeed(feed)
    }
  },
  components: {
    CustomForm
  }
}
</script>

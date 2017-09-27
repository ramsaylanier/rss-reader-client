<template>
  <div>
    <form
      @submit.prevent="submit"
    >
      <div v-for="input in inputs">
        <text-input
        ref = "input"
        :label = "input.label"
        :type = "input.type"
        :name = "input.name"
        :placeholder = "input.placeholder"
        v-model = "input.value"
        />
      </div>
    </form>
  </div>
</template>

<script>
  import TextInput from './input.vue'
  import {map} from 'lodash'
  export default {
    name: 'custom-form',
    props: ['inputs', 'handleSubmit'],
    methods: {
      submit (e) {
        const values = {}
        map(this.$refs.input, ref => {
          values[ref.name] = ref.value
        })
        this.$emit('handleSubmit', {...values})
      }
    },
    components: {
      TextInput
    }
  }
</script>

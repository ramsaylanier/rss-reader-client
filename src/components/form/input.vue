<template>
  <div class="control">
    <label v-if="label">{{label}}</label>
    <input
      :class="type"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      @input="onChange"
      >
  </div>
</template>

<script>
  export default {
    name: 'text-input',
    props: ['name', 'type', 'placeholder', 'value', 'label'],
    methods: {
      onChange (e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>

<style scoped>
  input{
    font-family: 'Roboto', sans-serif;
    background: transparent;
    border: 0;
    font-size: 1.2rem;
    padding: .5rem 0rem;
    border-bottom: 1px solid #2E112D;
    width: 100%;
  }


  input:not(last-of-type){
    margin-bottom: .5rem;
  }

  label{
    display: block;
  }

  .submit{
    margin-top: 2rem;
    background: #C9283E;
    border: 0;
    border-radius: 2px;
    color: #2E112D;
    font-weight: 900;
    font-size: 1.3rem;
    padding: .75rem;
  }

</style>

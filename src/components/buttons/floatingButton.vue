<template>
  <button
  @click="handleClick">
    <add-icon/>
  </button>
</template>

<script>
  import AddIcon from '@/components/icons/addIcon'

  export default {
    name: 'floating-button',
    components: {
      AddIcon
    },
    methods: {
      handleClick: (e) => {
        console.log(e)
      }
    }
  }
</script>

<style scoped>
  button{
    position: fixed;
    border: 0;
    bottom: 1rem;
    right: 1rem;
    height: 50px;
    width: 50px;
    background-color: transparent;
  }

  button svg{
    height: 40px;
    width: 40px;
    fill: #C9283E;
  }
</style>

<template>
  <div>
    <client></client>
  </div>
</template>

<script>
import Client from './components/Client.vue'

export default {
  name: 'App',
  components: {
    Client
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

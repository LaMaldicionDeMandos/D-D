<template>
  <div id="app">
    <steps />
    <hr class="col-12">
    <router-view/>
  </div>
</template>

<script>
import Steps from '@/components/Steps'
export default {
  name: 'App',
  components: {
    'steps': Steps
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

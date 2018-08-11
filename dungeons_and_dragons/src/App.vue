<template>
  <div id="app">
    <steps ref="steps"/>
    <hr class="col-12">
    <router-view v-on:next_step="next"/>
  </div>
</template>

<script>
import Steps from '@/components/Steps'
export default {
  name: 'App',
  components: {
    'steps': Steps
  },
  methods: {
    next (dungeon, step) {
      this.$refs.steps.complete(step)
    }
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

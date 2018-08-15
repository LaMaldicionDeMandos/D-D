<template>
  <div id="app">
    <steps ref="steps"/>
    <hr class="col-12">
    <keep-alive>
      <router-view v-on:next_step="next"/>
    </keep-alive>
  </div>
</template>

<script>
import Steps from '@/components/Steps'
import _ from 'lodash'
export default {
  name: 'App',
  components: {
    'steps': Steps
  },
  watch: {
    '$route' (to) {
      if (to.path.startsWith('/step/')) {
        const step = _.replace(to.path, '/step/', '')
        console.log(`go to step ${step}`)
        this.$refs.steps.complete(_.toInteger(step))
      }
    }
  },
  methods: {
    next (dungeon, step) {
      this.$router.push({name: `step${step}`, params: {dungeon: dungeon}})
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

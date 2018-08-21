<template>
  <canvas ref="map"/>
</template>

<script>
import Map from '../model/map'

export default {
  name: 'map-view',
  props: {
    dungeon: Object
  },
  data () {
    return {
      ctx: undefined,
      map: undefined
    }
  },
  mounted () {
    console.log(`Init, Dungeon: ${JSON.stringify(this.dungeon)}`)
    this.ctx = this.$refs.map.getContext('2d')
    requestAnimationFrame(this.drawGame)
    this.map = new Map(this.dungeon)
    this.$refs.map.height = this.map.height
    this.$refs.map.width = this.map.width
  },
  methods: {
    drawGame () {
      this.map.draw(this.ctx)
    }
  }
}
</script>
<!--
Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

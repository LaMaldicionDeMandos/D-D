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
      /*
   for( var i = 0; i < 30; i++) {
   for( var j = 0; j < 37; j++) {
   if (map[i][j]) {
   ctx.fillStyle = '#444444';
   ctx.fillRect(j*tileW, i*tileW, tileH, tileW);
   } else {
   ctx.drawImage(sandTile, j*tileW, i*tileW, tileH, tileW);
   }
   }
   }
   */
    }
  }
}
</script>
<!--
Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

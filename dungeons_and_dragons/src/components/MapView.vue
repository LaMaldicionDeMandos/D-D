<template>
  <drop @drop="handleDrop">
    <canvas ref="map"/>
  </drop>

</template>

<script>
import Map from '../model/map'
import {Drop} from 'vue-drag-drop'

export default {
  name: 'map-view',
  components: {
    Drop
  },
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
    //offsetParent.offsetLeft es la posicion relativa, el evento me va a tirar a partir de ahi.
    //console.log(this.$refs.map.offsetParent.offsetLeft)
    this.ctx = this.$refs.map.getContext('2d')
    requestAnimationFrame(this.drawGame)
    this.map = new Map(this.dungeon)
    this.$refs.map.height = this.map.height
    this.$refs.map.width = this.map.width
  },
  methods: {
    drawGame () {
      this.map.draw(this.ctx)
    },
    handleDrop (data, event) {
      alert(`You dropped with event: ${JSON.stringify(event.clientX)}`)
    }
  }
}
</script>
<!--
Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

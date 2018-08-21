<template>
  <div class="container">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-8 map">
        <map-view v-bind:dungeon="dungeon"></map-view>
      </div>
      <div class="col-3">
        <map-items-view></map-items-view>
      </div>
      <div class="col-3"></div>
    </div>
    <div>
      <button class="btn btn-primary" v-on:click="next()">Siguiente ></button>
    </div>
  </div>
</template>

<script>
import MapView from '@/components/MapView'
import MapItemsView from '@/components/MapItemsView'
export default {
  name: 'map-step',
  components: {
    'map-view': MapView,
    'map-items-view': MapItemsView
  },
  props: {
    dungeon: Object
  },
  methods: {
    next () {
    }
  }
}
</script>
<!--
Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-label {
    display: flex;
    margin-left: .5rem;
  }

  .btn {
    margin: .5rem;
  }

  .map {
    background-color: #fafafa;
    max-height: 400px;
    overflow: scroll;
    padding: 0px;
  }
</style>

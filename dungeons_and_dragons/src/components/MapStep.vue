<template>
  <div>
    <h3>Arma el mapa {{dungeon.name}}.</h3>
  </div>
</template>

<script>

export default {
  name: 'map-step',
  props: {
    dungeon: Object
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-label {
    display: flex;
    margin-left: .5rem;
  }

  .btn {
    margin: .5rem;
  }
</style>

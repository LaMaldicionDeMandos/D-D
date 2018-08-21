<template>
  <div class="container">
    <div class="row">
      <div id="chunkyWall" class="col-6">
        <img src="/static/chunky_wall.svg" >
        <div>
        <label>Muro Macizo</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'map-items-view'
}
</script>
<!--
Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    height: 40px;
    width: 60px;
  }
</style>

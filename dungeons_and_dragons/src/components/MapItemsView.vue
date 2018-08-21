<template>
  <div class="container">
    <div class="row">
      <div id="chunkyWall" class="col-6">
        <div class="box">
          <img src="/static/chunky_wall.svg" />
          <div>
            <label>Muro Macizo</label>
          </div>
        </div>
      </div>
      <div id="empty" class="col-6">
        <div class="box">
          <img />
          <label>Vacio</label>
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
    height: 33px;
    width: 33px;
    padding: 5px;
  }

  .col-6 {
    padding: 10px;
  }

  .box {
    border: solid #5a6268 1px;
    padding: 5px;
    cursor: grab;
  }

  .box img, label{
    cursor: grab;
  }
</style>

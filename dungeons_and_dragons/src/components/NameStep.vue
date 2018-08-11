<template>
  <div>
    <h3>Ponle un nombre a tu Dungeon y define un tamaño en metros.</h3>
    <div class="row">
      <div class="col-sm-4" ></div>
      <div class="col-sm-4">
        <label class="form-label">Nombre:</label>
        <input v-model="dungeon.name" placeholder="Nombre" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4" ></div>
      <div class="col-sm-2">
        <label class="form-label">Ancho en metros:</label>
        <input type="number" v-model="dungeon.width" placeholder="Ej. 500" class="form-control">
      </div>
      <div class="col-sm-2">
        <label class="form-label">Largo en metros:</label>
        <input type="number" v-model="dungeon.height" placeholder="Ej. 500" class="form-control">
      </div>
    </div>
    <div>
      <button class="btn btn-primary" v-on:click="next()">Siguiente ></button>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'name-step',
  data () {
    return {
      dungeon: {
      }
    }
  },
  methods: {
    validateNotEmpty (p) {
      return p && p.length > 0
    },
    validateNumber (p) {
      return _.toInteger(p)
    },
    validate (dungeon) {
      return this.validateNotEmpty(dungeon.name) &&
        this.validateNotEmpty(dungeon.width) &&
        this.validateNotEmpty(dungeon.height) &&
        this.validateNumber(dungeon.width) &&
        this.validateNumber(dungeon.height)
    },
    next () {
      if (this.validate(this.dungeon)) {
        this.$emit('next_step', this.dungeon, 2)
      }
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

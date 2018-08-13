<template>
  <div class="container">
    <h3>Hacer los tests de los saltos de steps</h3>
    <div class="row bs-wizard" style="border-bottom:0;">

      <div class="col-2 bs-wizard-step" v-bind:class="activation[0]">
        <div class="text-center bs-wizard-stepnum">Paso 1</div>
        <div class="progress"><div class="progress-bar"></div></div>
        <a href="#" class="bs-wizard-dot"></a>
        <div class="bs-wizard-info text-center">Ponle un nombre al mapa y elige el tamaño.</div>
      </div>

      <div class="col-2 bs-wizard-step" v-bind:class="activation[1]">
        <div class="text-center bs-wizard-stepnum">Paso 2</div>
        <div class="progress"><div class="progress-bar"></div></div>
        <a href="#" class="bs-wizard-dot"></a>
        <div class="bs-wizard-info text-center">Prepara el mapa.</div>
      </div>
      <div class="col-2 bs-wizard-step" v-bind:class="activation[2]">
        <div class="text-center bs-wizard-stepnum">Paso 3</div>
        <div class="progress"><div class="progress-bar"></div></div>
        <a href="#" class="bs-wizard-dot"></a>
        <div class="bs-wizard-info text-center">Agrega los monstruos y trampas.</div>
      </div>

      <div class="col-2 bs-wizard-step" v-bind:class="activation[3]">
        <div class="text-center bs-wizard-stepnum">Paso 4</div>
        <div class="progress"><div class="progress-bar"></div></div>
        <a href="#" class="bs-wizard-dot"></a>
        <div class="bs-wizard-info text-center">Prepara la historia.</div>
      </div>
      <div class="col-2 bs-wizard-step" v-bind:class="activation[4]">
        <div class="text-center bs-wizard-stepnum">Paso 5</div>
        <div class="progress"><div class="progress-bar"></div></div>
        <a href="#" class="bs-wizard-dot"></a>
        <div class="bs-wizard-info text-center">Escoge el nivel de la historia (para que nivel de personajes está hecha).</div>
      </div>
      <div class="col-2 bs-wizard-step" v-bind:class="activation[5]">
        <div class="text-center bs-wizard-stepnum">Fin</div>
        <div class="progress"><div class="progress-bar"></div></div>
        <a href="#" class="bs-wizard-dot"></a>
        <div class="bs-wizard-info text-center">A jugar!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'steps',
  data () {
    return {
      activation: [
        {
          active: true,
          complete: false,
          disabled: false
        },
        {
          active: false,
          complete: false,
          disabled: true
        },
        {
          active: false,
          complete: false,
          disabled: true
        },
        {
          active: false,
          complete: false,
          disabled: true
        },
        {
          active: false,
          complete: false,
          disabled: true
        },
        {
          active: false,
          complete: false,
          disabled: true
        }
      ]

    }
  },
  methods: {
    complete (step) {
      for (var i = 0; i < 6; i++) {
        this.activation[i].complete = false
        this.activation[i].active = false
        this.activation[i].disabled = false
        if (step - 1 > i) this.activation[i].complete = true
        else if (step - 1 === i) this.activation[i].active = true
        else this.activation[i].disabled = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bs-wizard {margin-top: 40px;}

  /*Form Wizard*/
  .bs-wizard {border-bottom: solid 1px #e0e0e0; padding: 0 0 10px 0;}
  .bs-wizard > .bs-wizard-step {padding: 0; position: relative;}
  .bs-wizard > .bs-wizard-step + .bs-wizard-step {}
  .bs-wizard > .bs-wizard-step .bs-wizard-stepnum {color: #595959; font-size: 16px; margin-bottom: 5px;}
  .bs-wizard > .bs-wizard-step .bs-wizard-info {color: #999; font-size: 14px;}
  .bs-wizard > .bs-wizard-step > .bs-wizard-dot {position: absolute; width: 30px; height: 30px; display: block; background: #fbe8aa; top: 45px; left: 50%; margin-top: -15px; margin-left: -15px; border-radius: 50%;}
  .bs-wizard > .bs-wizard-step > .bs-wizard-dot:after {content: ' '; width: 14px; height: 14px; background: #fbbd19; border-radius: 50px; position: absolute; top: 8px; left: 8px; }
  .bs-wizard > .bs-wizard-step > .progress {position: relative; border-radius: 0px; height: 8px; box-shadow: none; margin: 20px 0;}
  .bs-wizard > .bs-wizard-step > .progress > .progress-bar {width:0px; box-shadow: none; background: #fbe8aa;}
  .bs-wizard > .bs-wizard-step.complete > .progress > .progress-bar {width:100%;}
  .bs-wizard > .bs-wizard-step.active > .progress > .progress-bar {width:50%;}
  .bs-wizard > .bs-wizard-step:first-child.active > .progress > .progress-bar {width:0%;}
  .bs-wizard > .bs-wizard-step:last-child.active > .progress > .progress-bar {width: 100%;}
  .bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot {background-color: #f5f5f5;}
  .bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot:after {opacity: 0;}
  .bs-wizard > .bs-wizard-step:first-child  > .progress {left: 50%; width: 50%;}
  .bs-wizard > .bs-wizard-step:last-child  > .progress {width: 50%;}
  .bs-wizard > .bs-wizard-step.disabled a.bs-wizard-dot{ pointer-events: none; }
</style>

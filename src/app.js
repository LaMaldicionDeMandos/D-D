/**
 * Created by boot on 01/08/2018.
 */
var app = new Vue({
  el: '#app',
  data: {
    step: 1,
  },
  created() {
    const StepView = Vue.extend(Step);
    const MapNameAndSizeView = Vue.extend(MapNameAndSizeStep);
    const step1 = new StepView({
      propsData: {
        step: 1
      }
    }).$mount("#step");
    const mapNameAndSize = new MapNameAndSizeView().$mount("#step_content");
  }
});
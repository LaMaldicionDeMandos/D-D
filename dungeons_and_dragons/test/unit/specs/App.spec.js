import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  var vm;
  beforeEach(() => {
    const Constructor = Vue.extend(App)
    vm = new Constructor().$mount()
  });
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('h1'))
  });
  describe('on next_step_event', () => {
    it('Should call steps complete step', () => {
      const spy = jest.spyOn(vm.$refs.steps, 'complete');
      vm.next({}, 2);
      expect(spy).toHaveBeenCalledWith(2);
    });
  })
});

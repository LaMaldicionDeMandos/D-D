import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  var vm;
  beforeEach(() => {
    const mockedRoute = {push: () => true};
    const Constructor = Vue.extend(App);
    vm = new Constructor().$mount();
    vm.$router = mockedRoute;
  });
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('h1'))
  });
  describe('on next_step_event', () => {
    it('Should call steps complete step', () => {
      const steps = jest.spyOn(vm.$refs.steps, 'complete');
      const route = jest.spyOn(vm.$router, 'push');
      vm.next({}, 2);
      expect(steps).toHaveBeenCalledWith(2);
      expect(route).toHaveBeenCalledWith({name: 'step2', params: {dungeon: {}}});
    });
  })
});

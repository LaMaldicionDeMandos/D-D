import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App'
import Steps from '@/components/Steps'
import { shallowMount, createLocalVue } from '@vue/test-utils'

describe('App.vue', () => {
  var vm;
  beforeEach(() => {
    const mockedRoute = {push: () => vm.$route = '/step/2'};
    const Constructor = Vue.extend(App);
    vm = new Constructor().$mount();
    vm.$router = mockedRoute;
  });
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('h1'))
  });
  describe('on next_step_event', () => {
    it('Should call steps complete step', () => {
      const route = jest.spyOn(vm.$router, 'push');
      vm.next({}, 2);
      expect(route).toHaveBeenCalledWith({name: 'step2', params: {dungeon: {}}});
    });
    it('Should call step complete after route changed', (end) => {
      const completeMock = jest.fn();
      const localVue = createLocalVue();
      localVue.use(VueRouter);
      const router = new VueRouter({ routes: [{path: '/step/2', name: 'step2'}] });
      const wrapper = shallowMount(App, { localVue, router, stubs: {'steps': Steps} });
      wrapper.vm.$refs.steps.complete = completeMock;
      wrapper.update();
      // act
      router.push({ name: 'step2' });

      setInterval(() => {
        expect(completeMock).toHaveBeenCalledWith(2);
        end();
      }, 0);

      // assert
    });
    it('Should do nothing if path is not step', (end) => {
      const completeMock = jest.fn();
      const localVue = createLocalVue();
      localVue.use(VueRouter);
      const router = new VueRouter({ routes: [{path: '/step/2', name: 'step2'}] });
      const wrapper = shallowMount(App, { localVue, router, stubs: {'steps': Steps} });
      wrapper.vm.$refs.steps.complete = completeMock;
      wrapper.update();
      // act
      router.push({ name: 'a' });

      setInterval(() => {
        expect(completeMock).not.toHaveBeenCalled();
        end();
      }, 0);

      // assert
    });
  })
});

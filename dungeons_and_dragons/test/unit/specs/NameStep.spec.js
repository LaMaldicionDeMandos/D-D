import Vue from 'vue'
import NameStep from '@/components/NameStep'

describe('NameStep.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NameStep)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).toBe('Name!!');
  });
});

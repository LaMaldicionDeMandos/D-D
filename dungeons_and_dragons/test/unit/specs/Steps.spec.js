import Vue from 'vue'
import Steps from '@/components/Steps'

describe('Steps.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Steps)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Step1!!')
  })
})

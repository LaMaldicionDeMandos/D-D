import { mount } from '@vue/test-utils'
import Vue from 'vue'
import NameStep from '@/components/NameStep'

describe('NameStep.vue', () => {
  var vm;
  beforeEach(() => {
    const Constructor = Vue.extend(NameStep)
    vm = new Constructor().$mount()
  });

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('h3').textContent).toBe('Ponle un nombre a tu Dungeon y define un tamaño en metros.');
  });
  it('should init with empty dungeon', () => {
    expect(vm.dungeon.name).toBe(undefined);
    expect(vm.dungeon.width).toBe(undefined);
    expect(vm.dungeon.height).toBe(undefined);
  });
  describe('Form Validation', () => {
    describe('With empty properties', () => {
      it('should return false if name is undefined or empty, else return true', () => {
        expect(vm.validateNotEmpty(undefined)).toBeFalsy();
        expect(vm.validateNotEmpty('')).toBeFalsy();
        expect(vm.validateNotEmpty('saraza')).toBeTruthy();

      });
      it('should return false if some element is empty', () => {
        expect(vm.validate({name: 'a', width: 500})).toBeFalsy();
        expect(vm.validate({name: 'a', height: 500})).toBeFalsy();
        expect(vm.validate({width: 500, width: 500})).toBeFalsy();
        expect(vm.validate({name: 'a', width: 500, height: 0})).toBeFalsy();
        expect(vm.validate({name: 'a', width: 0, height: 10})).toBeFalsy();
        expect(vm.validate({name: '', width: 10, height: 10})).toBeFalsy();
        expect(vm.validate({name: 'a', width: 10, height: 10})).toBeTruthy();

      });
    });
  });
  describe('Next', () => {
    var wrapper;
    beforeEach(() => {
      const Constructor = Vue.extend(NameStep);
      wrapper = mount(Constructor);
    });
    it('should_do_nothing_if_not_valid_form', () => {
      wrapper.vm.next();
      expect(wrapper.emitted().next_step).not.toBeDefined();
    });
    it('should_emit_next_step_event_if_id_valid_form', () => {
      wrapper.vm.dungeon = {name:'a', width:500, height:500};
      wrapper.vm.next();
      expect(wrapper.emitted().next_step.length).toBe(1);
      expect(wrapper.emitted().next_step[0][0]).toBe(wrapper.vm.dungeon);
      expect(wrapper.emitted().next_step[0][1]).toBe(2);
    });
  })
});

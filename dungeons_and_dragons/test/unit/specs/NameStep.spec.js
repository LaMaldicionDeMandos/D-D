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
});

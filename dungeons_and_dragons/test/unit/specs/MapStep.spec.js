import { mount } from '@vue/test-utils'
import MapStep from '@/components/MapStep'

describe('MapStep.vue', () => {
  var wrapper, vm;
  beforeEach(() => {
    wrapper = mount(MapStep, {
      propsData: {
        dungeon: {width: '111', height: '84'}
      }
    });
    vm = wrapper.vm;
  });

  describe('On Mount', () => {
    it('should has the map width and height, 925x700', () => {
      expect(vm.dungeon.width).toBe('111');
    });
  });

});

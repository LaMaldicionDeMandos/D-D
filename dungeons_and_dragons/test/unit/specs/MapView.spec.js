import { mount } from '@vue/test-utils'
import MapView from '@/components/MapView'

describe('MapView.vue', () => {
  var wrapper, vm, requestAnimationFrameMock, mounted;
  beforeEach(() => {
    const $refs = {map: { getContext: () => {}}};
    mounted = jest.fn();
    requestAnimationFrameMock = jest.spyOn(global, 'requestAnimationFrame');
    wrapper = mount(MapView, {
      propsData: {
        dungeon: {width: '111', height: '84'}
      },
      mocks: {
        $refs
      },
      mounted
    });
    vm = wrapper.vm;
  });

  describe('On Mount', () => {
    it('should has the map width and height, 925x700', () => {
      expect(vm.$refs.map.width).toBe(925);
      expect(vm.$refs.map.height).toBe(700);
    });
    it('should has ctx', () => {

      expect(vm.ctx).not.toBeUndefined();
    });

    it('should call to render animation frame', () => {
      expect(requestAnimationFrameMock).toHaveBeenCalled();
      expect(mounted).toHaveBeenCalled();
    });
  });

});

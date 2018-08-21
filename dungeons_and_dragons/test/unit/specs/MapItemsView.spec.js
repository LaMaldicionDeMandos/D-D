import MapItemsView from '@/components/MapItemsView'
import { mount } from '@vue/test-utils'

describe('MapItemsView.vue', () => {
  var wrapper, vm;
  beforeEach(() => {
    wrapper = mount(MapItemsView);
    vm = wrapper.vm;
  });
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('#chunkyWall'));
  });
});

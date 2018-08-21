/**
 * Created by boot on 17/08/2018.
 */
import Map from '@/model/map'

describe('Map.js', () => {
  var map;
  beforeEach(() => {
    map = new Map({width: 111, height: 84});
  })
  describe('In contruction', () => {
    it('if dungeon has 111mX84m, then map should has 37X28 tiles', () => {
      expect(map.w).toBe(37);
      expect(map.h).toBe(28);
    });
  });
  describe('Map size', () => {
    it('with dungeon of 111mX84m and tile size of 25, then map size in pixels mus be 925X700', () => {
      expect(map.width).toBe(925);
      expect(map.height).toBe(700);
    });
  });

  describe('draw', () => {
    var drawBorder;
    var drawGrid;
    beforeEach(() => {
      drawBorder = jest.spyOn(map, 'drawBorder');
      drawGrid = jest.spyOn(map, 'drawGrid');
    });
    describe('ctx == null', () => {
      it('draw must do nothing', () => {
        map.draw();
        expect(drawBorder).not.toHaveBeenCalled();
        expect(drawGrid).not.toHaveBeenCalled();
      });
    });
    describe('ctx != null', () => {
      it('draw must call to drawBorder', () => {
        const mock = () => true;
        const ctx = {strokeRect: mock, beginPath: mock, moveTo: mock, lineTo: mock, stroke: mock};
        map.draw(ctx);
        expect(drawBorder).toHaveBeenCalledWith(ctx);
        expect(drawGrid).toHaveBeenCalledWith(ctx);
      });
    });
  });
});

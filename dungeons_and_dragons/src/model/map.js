/**
 * Created by boot on 14/08/2018.
 */

const TILE_SIZE = 25

class Map {
  constructor (dungeon) {
    this.tileWidth = TILE_SIZE
    this.tileHeight = TILE_SIZE
    this.w = dungeon.width / 3
    this.h = dungeon.height / 3
  }

  get width () {
    return this.tileWidth * this.w
  }

  get height () {
    return this.tileHeight * this.h
  }

  draw (ctx) {
    if (ctx == null) return
    this.drawBorder(ctx)
    this.drawGrid(ctx)
  }

  drawBorder (ctx) {
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 5
    ctx.strokeRect(0, 0, this.w * this.tileWidth, this.h * this.tileHeight)
  }

  drawGrid (ctx) {
    ctx.strokeStyle = 'black'
    ctx.globalAlpha = 0.4
    ctx.lineWidth = 0.5
    for (var i = 0; i < this.h; i++) {
      ctx.beginPath()
      ctx.moveTo(0, i * this.tileHeight)
      ctx.lineTo(this.width, i * this.tileHeight)
      ctx.stroke()
    }
    for (var j = 0; j < this.w; j++) {
      ctx.beginPath()
      ctx.moveTo(j * this.tileWidth, 0)
      ctx.lineTo(j * this.tileWidth, this.height)
      ctx.stroke()
    }
  }
}

export default Map

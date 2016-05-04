'use strict'

class World {
  constructor(size) {
    this.size = size
  }
  print() {
    return 'size:' + this.size
  }
}

module.exports = World
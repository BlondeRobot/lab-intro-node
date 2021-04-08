class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a.length - b.length);
    return this.items;
  }

  get(pos) {
    if (this.items.indexOf(pos)== -1) {
      throw new Error("OutOfBounds");
    }
    else {
      return this.items.indexOf(pos)
    }
  }

  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
      if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    } 
  }
}

module.exports = SortedList;

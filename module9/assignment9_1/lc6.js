class MyIterable {
  constructor() {
    this.items = [];
  }

  add(element) {
    if (!this.has(element)) {
      this.items.push(element);
    }
  }

  has(element) {
    return this.items.includes(element);
  }

  del(element) {
    let index = this.items.indexOf(element);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  get length() {
    return this.items.length;
  }

  // make the object iterable using generator function
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item;
    }
  }
}

//! TEST CASES, DO NOT MODIFY
let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);

console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5

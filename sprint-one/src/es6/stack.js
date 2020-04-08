class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  push(value) {
    // storing the value
    this.storage[this.count] = value;
    // increment counter
    this.count++;
  }
  pop() {
    // check if empty
    if (this.count === 0) { return; }
    // decrement counter
    this.count--;
    // save last item
    var deleted = this.storage[this.count];
    // delete
    delete this.storage[this.count];
    // return deleted
    return deleted;
  }
  size() {
    // return counter
    return this.count;
  }
}
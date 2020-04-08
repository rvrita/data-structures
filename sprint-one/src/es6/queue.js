class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.firstIndex = 0;
    this.lastIndex = 0;
  }
  enqueue(value) {
    // add new item to storage
    this.storage[this.lastIndex] = value;
    // increment last index
    this.lastIndex++;
  }
  dequeue() {
    // if empty return
    if (this.lastIndex - this.firstIndex <= 0) { return; }
    // store deleted item
    var deleted = this.storage[this.firstIndex];
    // delete item
    delete this.storage[this.firstIndex];
    // increment first index
    this.firstIndex++;
    // return deleted item
    return deleted;
  }
  size() {
    // return counter
    return this.lastIndex - this.firstIndex;
  }
}

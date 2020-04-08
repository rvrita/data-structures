var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // initiate new obj
  var obj = Object.create(queueMethods);
  // add empty storage obj
  obj.storage = {};
  // add first  and last index variable
  obj.firstIndex = 0;
  obj.lastIndex = 0;
  // return new obj instance
  return obj;
};

var queueMethods = {
  enqueue(value) {
    // add new item to storage
    this.storage[this.lastIndex] = value;
    // increment last index
    this.lastIndex++;
  },
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
  },
  size() {
    // return last_index
    return this.lastIndex - this.firstIndex;
  }
};



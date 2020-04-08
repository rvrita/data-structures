var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // initiate obj
  var obj = {};
  // make an empty storage
  obj.storage = {};
  // store index of first item
  obj.first_index = 0;
  // store index of last item
  obj.last_index = 0;
  // connect obj and methods
  extend(obj, queueMethods);
  // return obj
  return obj;
};

var queueMethods = {
  enqueue(value) {
    // add new item to storage
    this.storage[this.last_index] = value;
    // increment last index
    this.last_index++;
  },
  dequeue() {
  // if empty return
  if (this.last_index-this.first_index <= 0) return;
  // store deleted item
  var deleted = this.storage[this.first_index];
  // delete item
  delete this.storage[this.first_index];
  // increment first index
  this.first_index++;
  // return deleted item
  return deleted;
  },
  size() {
    // return last_index
    return this.last_index-this.first_index;
  }
};



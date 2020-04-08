var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstIndex = 0;
  this.lastIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  // add new item to storage
  this.storage[this.lastIndex] = value;
  // increment last index
  this.lastIndex++;
}
Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  // return last_index
  return this.lastIndex - this.firstIndex;
}

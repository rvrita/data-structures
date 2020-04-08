var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // initiate new obj
  var obj = Object.create(stackMethods);
  // add empty storage obj
  obj.storage = {};
  // add count variable
  obj.count = 0;
  // return new obj instance
  return obj;
};


var stackMethods = {
  push: function(value) {
    // storing the value
    this.storage[this.count] = value;
    // increment counter
    this.count++;
  },
  pop: function() {
    // check if empty
    if (this.count === 0) { return; }
    // decrement counter
    this.count--;
    // save last item
    var deleted = this.storage[this.count];
    // delete
    delete this.storage[this.count];
    // return deleted
    return deleted
  },
  size: function() {
    // return counter
    return this.count;
  }
};



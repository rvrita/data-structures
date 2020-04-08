var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // new obj
  var obj = {};
  // initiate storage
  obj.storage = {};
  // make count variable
  obj.count = 0;
  // extend obj with methods
  extend(obj, stackMethods);
  // return new obj
  return obj;
};

var extend = function(obj, stackMethods) {
  for (var key in stackMethods) {
    obj[key] = stackMethods[key]
  }
}

var stackMethods = {
  push: function(value) {
    // add value to storage
    this.storage[this.count] = value;
    // increment counter
    this.count++;
  },
  pop: function() {
    // return if empty
    if (this.count === 0) return;
    // decrement counter
    this.count--;
    // save last item
    var deleted = this.storage[this.count];
    // delete last item
    delete this.storage[this.count];
    // return deleted item
    return deleted;
  },
  size: function() {
    // return count
    return this.count;
  }
};



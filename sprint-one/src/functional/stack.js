var Stack = function() {
  var someInstance = {};

  var storage = {};

  // keep count variable to know how many items we have
  var count = 0;

  someInstance.push = function(value) {
    // adding a value to the stack obj
    storage[count] = value;
    // increasing count
    count++;
  };

  someInstance.pop = function() {
    if (count === 0) return;
    // decrease count
    count--;
    // store item to delete to return
    var deleted = storage[count];
    // delete item
    delete storage[count];
    // return deleted item
    return deleted;
  };

  someInstance.size = function() {
    // return count
    return count;
  };

  return someInstance;
};

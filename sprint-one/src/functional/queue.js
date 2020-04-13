var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // keep pointer to the index of first and last item
  var firstIndex = 0;
  var lastIndex = 0;

  someInstance.enqueue = function(value) {
    // add new item to storage
    storage[lastIndex] = value;
    // increment last index
    lastIndex++;
  };

  someInstance.dequeue = function() {
    // if empty return
    if (lastIndex - firstIndex <= 0) { return; }
    // store deleted item
    var deleted = storage[firstIndex];
    // delete item
    delete storage[firstIndex];
    // increment first index
    firstIndex++;
    // return deleted item
    return deleted;
  };

  someInstance.size = function() {
    // return last - first
    return lastIndex - firstIndex;
  };

  return someInstance;
};

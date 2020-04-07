var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // keep pointer to the index of first and last item
  var first_index = 0;
  var last_index = 0;

  someInstance.enqueue = function(value) {
    // add new item to storage
    storage[last_index] = value;
    // increment last index
    last_index++;
  };

  someInstance.dequeue = function() {
    // if empty return
    if (last_index-first_index <= 0) return;
    // store deleted item
    var deleted = storage[first_index];
    // delete item
    delete storage[first_index];
    // increment first index
    first_index++;
    // return deleted item
    return deleted;
  };

  someInstance.size = function() {
    // return last - first
    return last_index-first_index
  };

  return someInstance;
};

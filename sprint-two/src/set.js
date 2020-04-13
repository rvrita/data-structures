var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.contains = function(item) {
  return this.storage.indexOf(item) === -1 ? false : true;
};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this.storage.push(item);
  }
};

setPrototype.remove = function(item) {
  var index = this.storage.indexOf(item);
  if (index !== -1) {
    this.storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

contains: linear time complexity, O(n)
add: linear time complexity, O(n)
remove: linear time complexity, O(n)

 */

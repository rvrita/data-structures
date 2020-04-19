var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.contains = function(item) {
  //if item is in storage array return true, else return false
  return this._storage.indexOf(item) === -1 ? false : true;
};

setPrototype.add = function(item) {
  //if set does not contain the item
  //push item onto storage array
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.remove = function(item) {
  //assign index of item in array to index variable
  var index = this._storage.indexOf(item);
  //if index variable not -1, item is in array
  if (index !== -1) {
    //remove item from array
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

contains: linear time complexity, O(n)
add: linear time complexity, O(n)
remove: linear time complexity, O(n)


 */

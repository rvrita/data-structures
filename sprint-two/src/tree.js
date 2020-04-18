var Tree = function (value) {
  // initializing new tree object
  var newTree = {};
  newTree.value = value;
  // connecting the methods and the object
  _.extend(newTree, treeMethods);
  // making an empty array for the children
  newTree.children = [];
  // returning new object instance
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  // initializing a new tree with the value
  var child = Tree(value);
  // pushing it to the node's children array
  this.children.push(child);
};

treeMethods.contains = function (target) {
  // if the value equals the target we are looking for
  if (this.value === target) {
    // return true
    return true;
  }
  // if the node has children
  if (this.children.length > 0) {
    // loop through the children array
    for (var i = 0; i < this.children.length; i++) {
      // calling contains on the children
      if (this.children[i].contains(target)) {
        return true;
      }
    }

  }
  return false;
};

treeMethods.remove = function (target) {
  //iterate through current nodes children array
  for (var i = 0; i < this.children.length; i++) {
    //if target is found, splice out of array
    if (this.children[i].value === target) {
      // removing from the array
      this.children.splice(i, 1);
      return;
    } else {
      // call remove on the children
      this.children[i].remove(target);
    }
  }
}

/*

Complexity: What is the time complexity of the above functions?

addChild: constant time complexity, O(1)
contains: linear time complexity, O(n)
remove: linear time complexity, O(n)

 */
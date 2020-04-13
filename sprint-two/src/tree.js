var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      self = this.children[i];
      if (self.contains(target)) {
        return true;
      }
    }

  }
  return false;
};

/*

Complexity: What is the time complexity of the above functions?

addChild: constant time complexity, O(1)
contains: linear time complexity, O(n)

 */
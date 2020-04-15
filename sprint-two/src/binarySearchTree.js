var BinarySearchTree = function (value) {

  var tree = Object.create(BinarySearchTree.prototype);
  //create value property
  tree.value = value;
  //create left property
  tree.left = null;
  //create right property
  tree.right = null;

  return tree;

};

BinarySearchTree.prototype = {};

BinarySearchTree.prototype.insert = function (value) {
  //create newNode with value
  var newNode = BinarySearchTree(value);
  //compare value to this.value
  if (newNode.value > this.value) {
    //if right is null, add value
    if (this.right === null) {
      this.right = newNode;
    } else {
      //if not null, recursively call on right node
      this.right.insert(value);
    }
  } else {
    //if left is null, add value
    if (this.left === null) {
      this.left = newNode;
    } else {
      //if not null, recursively call on left node
      this.left.insert(value);
    }
  }


};

BinarySearchTree.prototype.contains = function (value) {
  //if node value equals passed value return true
  if (this.value === value) {
    return true;
  }

  //if right or left is null, return false - no more values to compare
  //if not null, recursively call to right or left
  if (value > this.value) {
    return (this.right === null) ? false : this.right.contains(value);
  } else {
    return (this.left === null) ? false : this.left.contains(value);
  }


};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  //call on first value
  cb(this.value);
  //if left is not null call on left - recursion on left
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  //if right is not null, call on right - recursion on right
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: O(n)
 * contains: O(n)
 * depthFirstLog: O(n)
 *
 */